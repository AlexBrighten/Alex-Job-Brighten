"use client";

import { useEffect, useId, useMemo, useRef } from "react";
import type { ButtonHTMLAttributes } from "react";

/**
 * VenomButton
 * A black, glossy symbiote-liquid button. Tendrils stretch out of the body and
 * reach for your cursor, then snap back with a jelly wobble.
 *
 * How it works
 *  - Beads (SVG circles) are chained into "strands" anchored around the pill.
 *  - A blur + alpha-threshold filter fuses them into one liquid mass.
 *  - The fused mass is turned into a height map and lit with SVG lighting
 *    filters (white key light that drifts with the cursor + cool rim light),
 *    which gives the wet specular highlights.
 */

export type VenomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Resting button width in px. */
  width?: number;
  /** Resting button height in px. */
  height?: number;
  /** Max length (px) the venom stretches towards the cursor. */
  reach?: number;
};

const STRANDS = 20;
const BEADS = 9;

interface Strand {
  px: number; // point on the surface
  py: number;
  nx: number; // outward normal
  ny: number;
  ax: number; // anchor, tucked inside the body
  ay: number;
  len: number; // per-strand length variation
  phase: number;
}

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smoothstep = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0), 0, 1);
  return t * t * (3 - 2 * t);
};
const hash = (n: number) => {
  const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
};

function buildStrands(w: number, h: number, pad: number): Strand[] {
  const R = h / 2;
  const L = Math.max(0, w - h); // straight run of the pill
  const arc = Math.PI * R; // one end cap
  const total = 2 * L + 2 * arc;
  const x0 = pad + R;
  const x1 = pad + w - R;
  const cy = pad + R;
  const inset = h * 0.22;

  return Array.from({ length: STRANDS }, (_, i) => {
    let s = ((i + 0.5) / STRANDS) * total;
    let px: number, py: number, nx: number, ny: number;

    if (s < L) {
      // top edge, left -> right
      px = x0 + s; py = pad; nx = 0; ny = -1;
    } else if ((s -= L) < arc) {
      // right cap
      const a = -Math.PI / 2 + s / R;
      nx = Math.cos(a); ny = Math.sin(a);
      px = x1 + nx * R; py = cy + ny * R;
    } else if ((s -= arc) < L) {
      // bottom edge, right -> left
      px = x1 - s; py = pad + h; nx = 0; ny = 1;
    } else {
      // left cap
      s -= L;
      const a = Math.PI / 2 + s / R;
      nx = Math.cos(a); ny = Math.sin(a);
      px = x0 + nx * R; py = cy + ny * R;
    }

    return {
      px, py, nx, ny,
      ax: px - nx * inset,
      ay: py - ny * inset,
      len: 0.7 + hash(i + 1) * 0.55,
      phase: hash(i + 40) * Math.PI * 2,
    };
  });
}

export default function VenomButton({
  width = 240,
  height = 64,
  reach = 84,
  className,
  style,
  children = "We are Venom",
  type = "button",
  ...rest
}: VenomButtonProps) {
  const uid = useId().replace(/:/g, "");
  const fid = `venom-${uid}`;
  const cls = `venom-btn-${uid}`;

  const pad = Math.ceil(reach + 30);
  const W = width + pad * 2;
  const H = height + pad * 2;

  const strands = useMemo(() => buildStrands(width, height, pad), [width, height, pad]);

  const svgRef = useRef<SVGSVGElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const circleRefs = useRef<Array<SVGCircleElement | null>>([]);
  const keyLightRef = useRef<SVGFEPointLightElement>(null);
  const rimLightRef = useRef<SVGFEPointLightElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const btn = btnRef.current;
    if (!svg || !btn) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const N = STRANDS * BEADS;
    const bx = new Float32Array(N);
    const by = new Float32Array(N);
    const vx = new Float32Array(N);
    const vy = new Float32Array(N);
    strands.forEach((s, i) => {
      for (let b = 0; b < BEADS; b++) {
        bx[i * BEADS + b] = s.ax;
        by[i * BEADS + b] = s.ay;
      }
    });

    const ptr = { x: 0, y: 0, on: false };
    let press = 0;
    let pressTo = 0;
    let lx = W * 0.28;
    let ly = pad - 36;
    let last = performance.now();
    let visible = true;
    let raf = 0;

    const r0 = height * 0.22; // root bead radius
    const rTip = 5.5; // thinnest part of a tendril
    const attractRadius = reach * 2.35;
    const inset = height * 0.2;

    const frame = (now: number) => {
      const dt = Math.min(2.5, (now - last) / 16.667);
      last = now;
      if (!reduceMotion) raf = requestAnimationFrame(frame);
      if (!visible && !reduceMotion) return;

      const t = now / 1000;
      const rect = svg.getBoundingClientRect();
      const cx = clamp(ptr.x - rect.left, -W, W * 2);
      const cy = clamp(ptr.y - rect.top, -H, H * 2);
      press += (pressTo - press) * Math.min(1, 0.2 * dt);

      for (let i = 0; i < STRANDS; i++) {
        const s = strands[i];
        let pull = 0;
        let dirx = s.nx;
        let diry = s.ny;
        let tipX = s.ax;
        let tipY = s.ay;

        if (ptr.on) {
          const dx = cx - s.px;
          const dy = cy - s.py;
          const d = Math.hypot(dx, dy) || 0.001;
          const ux = dx / d;
          const uy = dy / d;

          // 1 when the cursor sits straight out from this part of the surface
          const facing = clamp((ux * s.nx + uy * s.ny + 0.2) / 1.2, 0, 1);
          const near = 1 - smoothstep(12, attractRadius, d);
          pull = clamp(near * (0.3 + 0.7 * facing) * (1 + 0.5 * press), 0, 1);

          const mx = lerp(s.nx, ux, facing);
          const my = lerp(s.ny, uy, facing);
          const ml = Math.hypot(mx, my) || 1;
          dirx = mx / ml;
          diry = my / ml;

          // facing the cursor: reach for it. Not facing: just flare outward a bit.
          const want = lerp(10, Math.max(0, d - 4), facing);
          const maxLen = reach * s.len * (1 + 0.35 * press);
          const visibleLen = Math.min(want, maxLen);

          const fx = s.px + dirx * visibleLen;
          const fy = s.py + diry * visibleLen;
          tipX = s.ax + (fx - s.ax) * pull;
          tipY = s.ay + (fy - s.ay) * pull;
        }

        const sx = -diry;
        const sy = dirx;

        for (let b = 0; b < BEADS; b++) {
          const k = i * BEADS + b;
          const tt = b / (BEADS - 1);
          const sway =
            Math.sin(t * 2.3 + s.phase + b * 0.7) * 5.5 * tt * pull +
            Math.sin(t * 4.1 + s.phase * 1.7) * 1.6 * tt * pull;
          const tx = s.ax + (tipX - s.ax) * tt + sx * sway;
          const ty = s.ay + (tipY - s.ay) * tt + sy * sway;

          // springs: stiff at the root, loose at the tip so the tip trails and wobbles
          const stiff = lerp(0.26, 0.07, tt) * dt;
          const damp = Math.pow(lerp(0.62, 0.8, tt), dt);
          vx[k] = (vx[k] + (tx - bx[k]) * stiff) * damp;
          vy[k] = (vy[k] + (ty - by[k]) * stiff) * damp;
          bx[k] += vx[k] * dt;
          by[k] += vy[k] * dt;

          // thick root -> thin neck -> little droplet at the tip
          const e = Math.pow(tt, 0.8);
          let rr = lerp(r0 * (0.55 + 0.45 * pull), rTip, e);
          if (b === BEADS - 1) rr += 4 * pull;

          const c = circleRefs.current[k];
          if (c) {
            c.setAttribute("cx", bx[k].toFixed(2));
            c.setAttribute("cy", by[k].toFixed(2));
            c.setAttribute("r", rr.toFixed(2));
          }
        }
      }

      // lights drift with the cursor so the gloss feels alive
      const tgtX = lerp(W * 0.28, ptr.on ? cx : W * 0.28, 0.3) + Math.sin(t * 0.6) * 16;
      const tgtY = lerp(pad - 36, ptr.on ? cy : pad - 36, 0.25) + Math.cos(t * 0.5) * 8;
      lx += (tgtX - lx) * Math.min(1, 0.06 * dt);
      ly += (tgtY - ly) * Math.min(1, 0.06 * dt);
      keyLightRef.current?.setAttribute("x", lx.toFixed(1));
      keyLightRef.current?.setAttribute("y", ly.toFixed(1));
      rimLightRef.current?.setAttribute("x", (W - lx * 0.8).toFixed(1));
    };

    if (reduceMotion) {
      frame(performance.now());
      return;
    }

    const onMove = (e: PointerEvent) => {
      ptr.x = e.clientX;
      ptr.y = e.clientY;
      ptr.on = true;
    };
    const onUp = (e: PointerEvent) => {
      pressTo = 0;
      if (e.pointerType !== "mouse") ptr.on = false;
    };
    const onLeaveDoc = () => (ptr.on = false);
    const onDown = () => (pressTo = 1);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") pressTo = 1;
    };
    const onKeyUp = () => (pressTo = 0);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    document.documentElement.addEventListener("mouseleave", onLeaveDoc);
    btn.addEventListener("pointerdown", onDown);
    btn.addEventListener("keydown", onKeyDown);
    btn.addEventListener("keyup", onKeyUp);

    // skip the physics while the button is scrolled out of view
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: `${pad}px` }
    );
    io.observe(btn);

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveDoc);
      btn.removeEventListener("pointerdown", onDown);
      btn.removeEventListener("keydown", onKeyDown);
      btn.removeEventListener("keyup", onKeyUp);
    };
  }, [strands, W, H, pad, height, reach]);

  return (
    <span style={{ position: "relative", display: "inline-block", width, height }}>
      <style>{`
        .${cls}:focus-visible{outline:2px solid rgba(255,255,255,.9);outline-offset:5px}
        .${cls}:active{transform:scale(.97)}
      `}</style>

      <svg
        ref={svgRef}
        aria-hidden="true"
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ position: "absolute", left: -pad, top: -pad, pointerEvents: "none", overflow: "visible" }}
      >
        <defs>
          <filter
            id={fid}
            filterUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={W}
            height={H}
            colorInterpolationFilters="sRGB"
          >
            {/* 1. fuse the beads into one liquid mass */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -11"
              result="goo"
            />

            {/* 2. height map: fine bevel for thin tendrils + broad dome for the body */}
            <feGaussianBlur in="goo" stdDeviation="2.5" result="hFine" />
            <feGaussianBlur in="goo" stdDeviation="11" result="hBroad" />
            <feComposite
              in="hFine"
              in2="hBroad"
              operator="arithmetic"
              k1="0"
              k2="0.6"
              k3="0.4"
              k4="0"
              result="height"
            />

            {/* 3. near-black base with a hint of blue shading */}
            <feDiffuseLighting
              in="height"
              surfaceScale="14"
              diffuseConstant="0.62"
              lightingColor="#111526"
              result="diff"
            >
              <feDistantLight azimuth="235" elevation="50" />
            </feDiffuseLighting>
            <feComposite in="diff" in2="goo" operator="in" result="diffIn" />

            {/* 4. cool rim reflection from below-right */}
            <feSpecularLighting
              in="height"
              surfaceScale="12"
              specularConstant="0.75"
              specularExponent="22"
              lightingColor="#7386ff"
              result="specB"
            >
              <fePointLight ref={rimLightRef} x={W * 0.72} y={pad + height + 50} z={60} />
            </feSpecularLighting>
            <feComposite in="specB" in2="goo" operator="in" result="specBIn" />

            {/* 5. crisp white key light: the wet highlight */}
            <feSpecularLighting
              in="height"
              surfaceScale="12"
              specularConstant="1.5"
              specularExponent="34"
              lightingColor="#f4f7ff"
              result="specA"
            >
              <fePointLight ref={keyLightRef} x={W * 0.28} y={pad - 36} z={95} />
            </feSpecularLighting>
            <feComposite in="specA" in2="goo" operator="in" result="specAIn" />

            {/* 6. stack the layers */}
            <feComposite in="diffIn" in2="specBIn" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="c1" />
            <feComposite in="c1" in2="specAIn" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>
        </defs>

        <g filter={`url(#${fid})`}>
          <rect x={pad} y={pad} width={width} height={height} rx={height / 2} fill="#020205" />
          {Array.from({ length: STRANDS * BEADS }, (_, k) => {
            const s = strands[Math.floor(k / BEADS)];
            return (
              <circle
                key={k}
                ref={(el) => {
                  circleRefs.current[k] = el;
                }}
                cx={s.ax}
                cy={s.ay}
                r={4}
                fill="#000"
              />
            );
          })}
        </g>
        <rect
          x={pad + 1}
          y={pad + 1}
          width={width - 2}
          height={height - 2}
          rx={(height - 2) / 2}
          fill="none"
          stroke="rgba(138, 151, 255, 0.22)"
          strokeWidth="1"
        />
        <path
          d={`M ${pad + height / 2} ${pad + 2} H ${pad + width - height / 2}`}
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeLinecap="round"
          strokeWidth="1.5"
          opacity="0.55"
        />
      </svg>

      <button
        ref={btnRef}
        type={type}
        className={className ? `${cls} ${className}` : cls}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          border: 0,
          padding: "0 28px",
          background: "transparent",
          color: "#f4f6ff",
          font: "700 17px/1 ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
          letterSpacing: "0.02em",
          cursor: "pointer",
          borderRadius: height / 2,
          WebkitTapHighlightColor: "transparent",
          textShadow: "0 1px 0 rgba(0,0,0,.6), 0 0 14px rgba(150,170,255,.35)",
          transition: "transform .15s cubic-bezier(.3,1.6,.5,1)",
          ...style,
        }}
        {...rest}
      >
        {children}
      </button>
    </span>
  );
}

export { VenomButton };