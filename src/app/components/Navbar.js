"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-8 py-5 max-md:px-5 max-[480px]:px-4">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-0.5 text-[1.35rem] font-extrabold tracking-[-0.04em] text-[#f5f5f5] transition-opacity hover:opacity-80"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-1.5">
              <circle cx="12" cy="12" r="10" stroke="#c8ff00" strokeWidth="2" />
              <path d="M8 12l3 3 5-5" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Alex
            <span className="text-3xl leading-none text-[#c8ff00]">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#a0a0a0] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs font-semibold text-[#f5f5f5] transition-all hover:border-white/20 hover:bg-white/[0.08] md:inline-flex"
          >
            Let&apos;s Talk
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c8ff00]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </a>

          {/* Hamburger */}
          <button
            className="relative z-[51] flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <motion.span
              className="block h-[2px] w-5 rounded-full bg-white"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] w-5 rounded-full bg-white"
              animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-5 rounded-full bg-white"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#0a0a0a]/98 backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-3xl font-semibold text-white transition-colors hover:text-[#c8ff00]"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="mt-4 rounded-full bg-[#c8ff00] px-8 py-3.5 text-sm font-bold text-[#0a0a0a]"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.35 }}
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
