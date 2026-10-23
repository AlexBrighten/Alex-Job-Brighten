"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "LinkedIn",
    desc: "Connecting with like-minded people",
    href: "https://linkedin.com/in/alexjob3606",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    desc: "Projects, experiments & product work",
    href: "https://github.com/AlexBrighten",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0c10] px-0 pb-0 pt-28"
      id="hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:60px_60px]" />
      
      {/* Gradient orbs */}
      <div className="absolute -right-32 -top-48 h-[500px] w-[500px] rounded-full bg-[#ef4444]/10 blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#1d4ed8]/15 blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-16 px-8 max-md:px-5 max-[480px]:px-4 lg:flex-row lg:items-start lg:justify-between">
        {/* Left content */}
        <motion.div
          className="max-w-[560px] flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Available badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2.5 text-sm font-medium text-[#ef4444]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#ef4444] shadow-[0_0_8px_rgba(239,68,68,0.65)]" />
            Open to Founder&apos;s Office roles
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="mb-6 text-[clamp(2.5rem,5.5vw,4.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I Turn Chaos Into Clarity for Founders
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-10 max-w-[480px] text-[1.05rem] leading-[1.7] text-[#888]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Alex Job A. — I combine product thinking, technical depth, and relentless execution to help founders move faster, make sharper decisions, and ship what matters.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-3 rounded-sm text-sm font-medium text-white transition-colors hover:text-[#ef4444]"
            >
              <span className="border-b border-dashed border-white/20 pb-0.5">What I bring</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ef4444] transition-transform group-hover:scale-110">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b0c10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#888] transition-colors hover:text-white"
            >
              See my work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Social Links Card */}
        <motion.div
          className="w-full max-w-[380px] flex-shrink-0 lg:mt-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#13151b] shadow-[0_18px_60px_rgba(29,78,216,0.12)]">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                  className={`group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-[#222634] ${
                  index !== socialLinks.length - 1 ? "border-b border-white/[0.08]" : ""
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#191c26] text-[#94a3b8] transition-colors group-hover:bg-[#1e3a8a] group-hover:text-[#38bdf8]">
                  {social.icon}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{social.name}</span>
                  <span className="text-xs text-[#666]">{social.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stripe divider at bottom */}
      <div className="stripe-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
