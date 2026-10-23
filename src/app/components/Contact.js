"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VenomButton from "./venom";

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/alexjob3606",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/AlexBrighten",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:alexjob.pm@gmail.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Stripe divider */}
      <div className="stripe-divider" />

      <section className="bg-[#0a0a0a] px-0 pb-20 pt-24 md:pt-32" id="contact" ref={ref}>
        <div className="mx-auto max-w-[1200px] px-8 max-md:px-5 max-[480px]:px-4">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#c8ff00]">
              Get in Touch
            </span>

            <h2 className="mb-6 max-w-[640px] text-4xl font-bold leading-tight tracking-[-0.03em] text-white md:text-5xl">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-[#c8ff00] to-[#88cc00] bg-clip-text text-transparent">
                meaningful
              </span>{" "}
              together.
            </h2>

            <p className="mx-auto mb-12 max-w-[520px] text-base leading-[1.7] text-[#888]">
              Looking for a Founder&apos;s Office Associate or Intern role at an early-stage startup. If you need someone who can think strategically and execute technically — let&apos;s talk.
            </p>

            {/* CTA */}
            <motion.div
              className="mb-14"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <VenomButton
                aria-label="Send Alex an email"
                onClick={() => {
                  window.location.href = "mailto:alexjob.pm@gmail.com";
                }}
              >
                Say Hello
              </VenomButton>
            </motion.div>

            {/* Social links */}
            <div className="flex flex-col gap-3 sm:flex-row">
              {socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.06] bg-[#111113] px-5 py-3 text-sm font-medium text-[#999] transition-all hover:border-white/[0.12] hover:bg-[#1a1a1c] hover:text-white"
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {s.icon}
                  <span>{s.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] bg-[#070709] px-0 py-10">
        <div className="mx-auto max-w-[1200px] px-8 max-md:px-5 max-[480px]:px-4">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-lg font-extrabold tracking-[-0.03em] text-[#f5f5f5]">
              Alex<span className="text-[#c8ff00]">.</span>
            </span>
            <p className="text-xs text-[#555]">
              Designed & built by Alex Job A · {new Date().getFullYear()}
            </p>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.05em] text-[#333]">
              Aspiring Founder&apos;s Office Associate · Technical Core
            </p>
            <p className="pt-3 text-xs font-normal tracking-wide text-white">
              All honor and glory to God forever and ever!
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
