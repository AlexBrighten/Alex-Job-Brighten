"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: "elyon",
    title: "Elyon Luxury E-Commerce",
    category: "Full-Stack Build",
    description: "Built end-to-end: real-time inventory sync via WebSockets, optimistic UI, atomic transactions, and RBAC — solving cart-collision friction for a luxury skincare brand.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    year: "2025",
    href: "https://github.com/AlexBrighten",
  },
  {
    id: "product-teardowns",
    title: "6 Product Teardowns",
    category: "Product Analysis",
    description: "Deep-dive analyses of Swiggy, WhatsApp Pay, Zomato, Spotify, Razorpay, and Instagram — covering JTBD, funnel friction, business models, and RICE-scored recommendations.",
    tags: ["JTBD", "Funnel Analysis", "RICE Framework", "Metrics"],
    year: "2025",
    href: "mailto:alexjob.pm@gmail.com?subject=Product%20Teardown%20Decks%20Request",
  },
  {
    id: "spidey-tracker",
    title: "Spidey Tracker PWA",
    category: "Offline-First App",
    description: "Engineered an offline-first habit tracker with sub-50ms local writes via IndexedDB, service worker background sync, and streak analytics dashboards.",
    tags: ["PWA", "IndexedDB", "Firestore", "Recharts"],
    year: "2024",
    href: "https://github.com/AlexBrighten",
  },
  {
    id: "curious-bees",
    title: "SRM Curious Bees Platform",
    category: "UX & Operations",
    description: "Led user research across 60+ students, built a 40-component design system, drafted PRDs with acceptance criteria, and cut onboarding drop-off by 40%.",
    tags: ["User Research", "Design System", "Agile", "PRDs"],
    year: "2024",
    href: "https://github.com/AlexBrighten",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative bg-[#0a0a0a] px-0 py-24 md:py-32"
      id="projects"
      ref={ref}
    >
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5 max-[480px]:px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#666]">
              Proof of Work
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Projects & Analyses
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#888] transition-colors hover:text-[#c8ff00]"
          >
            Want the full case studies?
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col">
          {projectsData.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block cursor-pointer border-t border-white/[0.06] py-8 transition-colors first:border-t-0 hover:bg-white/[0.01] md:py-10"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[#888]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#444]">{project.year}</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-[#c8ff00] md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="max-w-[550px] text-sm leading-[1.6] text-[#777]">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="hidden flex-wrap gap-2 lg:flex">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.06] bg-[#111113] px-3 py-1.5 text-xs text-[#666]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[#555] transition-all group-hover:border-[#c8ff00]/30 group-hover:bg-[#c8ff00]/10 group-hover:text-[#c8ff00]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
