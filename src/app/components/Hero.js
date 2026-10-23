"use client";

import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "X/Twitter",
    desc: "Sharing startup & product insights",
    href: "https://twitter.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    desc: "Breakdowns on product & growth",
    href: "https://youtube.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
      </svg>
    ),
  },
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
    name: "Dribbble",
    desc: "Visual case studies & teardowns",
    href: "https://dribbble.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-9.36c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zm7.56-7.872c.29.39 2.16 2.91 3.83 5.998 3.646-1.365 5.19-3.44 5.373-3.702A10.577 10.577 0 0 0 12 1.56c-.252 0-.5.014-.748.038zm10.394 3.753c-.217.29-1.91 2.5-5.717 4.02.24.49.47.985.68 1.485.075.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] px-0 pb-0 pt-28"
      id="hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:60px_60px]" />
      
      {/* Gradient orbs */}
      <div className="absolute -right-32 -top-48 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[100px]" />

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
            className="mb-8 inline-flex items-center gap-2.5 text-sm font-medium text-[#c8ff00]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#c8ff00] shadow-[0_0_8px_rgba(200,255,0,0.5)]" />
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
              className="group inline-flex items-center gap-3 rounded-sm text-sm font-medium text-white transition-colors hover:text-[#c8ff00]"
            >
              <span className="border-b border-dashed border-white/20 pb-0.5">What I bring</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c8ff00] transition-transform group-hover:scale-110">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111113]">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-white/[0.03] ${
                  index !== socialLinks.length - 1 ? "border-b border-white/[0.06]" : ""
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-[#888] transition-colors group-hover:bg-white/[0.08] group-hover:text-white">
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
