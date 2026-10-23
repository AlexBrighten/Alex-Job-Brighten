"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: "spidey-tracker",
    title: "Spidey Tracker",
    category: "Deep Work PWA",
    description: "Drift-free background timer powered by Web Worker blobs to bypass browser tab throttling. Features visibility-change site-pinning that auto-aborts distracted sessions, and cross-platform Service Worker notifications.",
    tags: ["React 18", "Vite", "PWA", "Web Workers", "Tailwind CSS", "Firebase"],
    year: "2025",
    href: "https://github.com/AlexBrighten/Alex-Spidey-Tracker-",
  },
  {
    id: "jobpulse",
    title: "JobPulse",
    category: "Chrome Ext + Web Dashboard",
    description: "Application & resume performance tracker featuring real-time Google Cloud Firestore synchronization, 100% private local IndexedDB resume storage, toolbar auto-scraping, and A/B variant callback analytics.",
    tags: ["Manifest V3", "Cloud Firestore", "IndexedDB", "Vercel", "A/B Analytics"],
    year: "2025",
    href: "https://github.com/AlexBrighten/JobPulse",
  },
  {
    id: "celtrix",
    title: "Celtrix (Open Source)",
    category: "Open Source CLI Tool",
    description: "Published npm scaffolding CLI (`npx celtrix`) that sets up modern full-stack web applications in seconds with MERN, MEAN, MEVN, Next.js, and Hono stacks, automated tooling, and pre-configured integrations.",
    tags: ["npm Package", "Node.js CLI", "Open Source", "Next.js", "Hono", "MERN"],
    year: "2025",
    href: "https://github.com/AlexBrighten/Celtrix",
  },
  {
    id: "portman",
    title: "Portman",
    category: "VS Code Extension",
    description: "Interactive visual port management extension for VS Code that detects and kills network ports without leaving the editor. Features smart detection for 40+ frameworks, terminal EADDRINUSE auto-retry, and Docker awareness.",
    tags: ["VS Code Extension", "TypeScript", "Process Monitoring", "Docker", "DevTools"],
    year: "2025",
    href: "https://github.com/AlexBrighten/portman",
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
            href="https://github.com/AlexBrighten"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#888] transition-colors hover:text-[#c8ff00]"
          >
            View all on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
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
