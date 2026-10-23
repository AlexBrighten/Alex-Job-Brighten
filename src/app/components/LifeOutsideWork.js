"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const moments = [
  {
    title: "Hoarding expensive plastic",
    type: "Photo",
    src: "/collecting%20cool%20toys.jpg",
    alt: "Alex justifying another toy purchase",
    accent: "#ef4444",
  },
  {
    title: "Arguing over Git conflicts",
    type: "Photo",
    src: "/hackathon.jpg",
    alt: "Alex and a friend pretending their code works",
    accent: "#3b82f6",
  },

  {
    title: "Praying for zero downtime",
    type: "Photo",
    src: "/youth%20fellowship.jpg",
    alt: "Alex seeking divine intervention for his startup ideas",
    accent: "#22c55e",
  },
  {
    title: "Vocal stress testing",
    type: "Video",
    src: "/singing.mp4",
    alt: "Alex performing unsolicited audio concerts",
    accent: "#f59e0b",
  },
  {
    title: "Main character syndrome",
    type: "Video",
    src: "/vloging.mp4",
    alt: "Alex talking to an inanimate object",
    accent: "#a855f7",
  },
];

export default function LifeOutsideWork() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cycleStart = track.children[moments.length]?.offsetLeft ?? 0;
    if (!cycleStart) return;

    track.scrollLeft = cycleStart;

    const handleScroll = () => {
      if (track.scrollLeft < cycleStart * 0.5) {
        track.scrollLeft += cycleStart;
      } else if (track.scrollLeft > cycleStart * 1.5) {
        track.scrollLeft -= cycleStart;
      }
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const move = (direction) => {
    trackRef.current?.scrollBy({
      left: direction * trackRef.current.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#13151b] py-24 md:py-32" id="life-outside-work">
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5 max-[480px]:px-4">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#38bdf8]">
              Non-billable hours
            </span>
            <h2 className="mb-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Proof I actually leave my desk.
            </h2>
            <p className="max-w-xl text-base leading-[1.7] text-white/65">
              Occasionally I touch grass, financially ruin myself with plastic toys, or subject my friends to my singing. It builds character.
            </p>
          </div>

          <div className="flex shrink-0 gap-2" aria-label="Carousel controls">
            <button
              type="button"
              onClick={() => move(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#191c26] text-white/70 transition hover:border-[#3b82f6]/60 hover:bg-[#1e3a8a]/40 hover:text-white"
              aria-label="Previous moment"
            >
              <span aria-hidden="true" className="text-xl">&larr;</span>
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ef4444]/40 bg-[#7f1d1d]/20 text-[#fca5a5] transition hover:bg-[#dc2626]/30 hover:text-white"
              aria-label="Next moment"
            >
              <span aria-hidden="true" className="text-xl">&rarr;</span>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {[...moments, ...moments, ...moments].map((moment, index) => (
            <motion.article
              key={`${moment.title}-${index}`}
              className="group relative min-w-[82%] snap-start overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0f14] sm:min-w-[48%] lg:min-w-[31%]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#191c26]">
                {moment.type === "Video" ? (
                  <video
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    src={moment.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    aria-label={moment.alt}
                  />
                ) : (
                  <Image
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    src={moment.src}
                    alt={moment.alt}
                    fill
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-90" />
                <span
                  className="absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white backdrop-blur-sm"
                  style={{ borderColor: `${moment.accent}80`, backgroundColor: `${moment.accent}22` }}
                >
                  {moment.type}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <h3 className="text-lg font-semibold text-white">{moment.title}</h3>
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: moment.accent }} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}