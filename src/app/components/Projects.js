"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TiltCard } from "./ui/be-ui-tilt-card";

const projectsData = [
  {
    id: "jobpulse",
    title: "JobPulse",
    category: "Chrome Ext + Web Dashboard",
    year: "2025",
    accent: "#3b82f6",
    shortDescription:
      "Application & resume performance tracker featuring real-time Google Cloud Firestore synchronization, 100% private local IndexedDB resume storage, toolbar auto-scraping, and A/B variant callback analytics.",
    whyIBuiltIt:
      "I was tired of tracking job applications manually in chaotic, outdated spreadsheets, losing track of customized resume variants, and having zero visibility into what was actually working. I built JobPulse to turn job hunting into an empirical, data-driven funnel with 1-click scraping from job boards, private local storage, and response analytics.",
    features: [
      {
        title: "1-Click Auto-Scraping",
        desc: "Extracts job title, company, salary band, and URL directly from LinkedIn, Indeed, and Ashby via Manifest V3 background scripts.",
      },
      {
        title: "A/B Variant Analytics",
        desc: "Tracks and correlates which resume iterations yield interviews and recruiter callbacks with conversion metrics.",
      },
      {
        title: "Hybrid Privacy Storage",
        desc: "Keeps sensitive resume PDFs strictly encrypted in local client-side IndexedDB while syncing application metadata via Google Cloud Firestore.",
      },
    ],
    tags: ["Manifest V3", "Cloud Firestore", "IndexedDB", "Next.js", "A/B Analytics", "Tailwind CSS"],
    githubUrl: "https://github.com/AlexBrighten/JobPulse",
    liveUrl: "https://github.com/AlexBrighten/JobPulse",
    liveLabel: "GitHub Repo",
  },
  {
    id: "spidey-tracker",
    title: "Spidey Tracker",
    category: "Deep Work PWA",
    year: "2025",
    accent: "#ef4444",
    shortDescription:
      "Drift-free background timer powered by Web Worker blobs to bypass browser tab throttling. Features visibility-change site-pinning that auto-aborts distracted sessions, and cross-platform Service Worker notifications.",
    whyIBuiltIt:
      "Most web-based timers fail when you switch tabs because browsers aggressively throttle background JS timers (setTimeout/setInterval) to save battery, causing multi-minute clock drift. On top of that, standard timers don't enforce discipline. I engineered Spidey Tracker with Web Worker blobs running in an isolated CPU thread to guarantee sub-millisecond precision, paired with a Page Visibility watcher that auto-aborts deep work intervals the second you switch to distracting tabs.",
    features: [
      {
        title: "Drift-Free Worker Blobs",
        desc: "Executes time calculation in dedicated Web Workers via in-memory Blobs, immune to main-thread browser tab throttling.",
      },
      {
        title: "Anti-Distraction Auto-Abort",
        desc: "Detects tab switching and blur events via the Page Visibility API, automatically aborting compromised deep work sessions.",
      },
      {
        title: "Cross-Platform PWA",
        desc: "Full offline support with Service Worker alerts, installable PWA manifest, and Firebase persistence.",
      },
    ],
    tags: ["React 18", "Vite", "PWA", "Web Workers", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/AlexBrighten/Alex-Spidey-Tracker-",
    liveUrl: "https://github.com/AlexBrighten/Alex-Spidey-Tracker-",
    liveLabel: "GitHub Repo",
  },
  {
    id: "celtrix",
    title: "Celtrix (Open Source)",
    category: "Open Source CLI Tool",
    year: "2025",
    accent: "#22c55e",
    shortDescription:
      "Published npm scaffolding CLI (`npx celtrix`) that sets up modern full-stack web applications in seconds with MERN, MEAN, MEVN, Next.js, and Hono stacks, automated tooling, and pre-configured integrations.",
    whyIBuiltIt:
      "Spinning up new full-stack projects repeatedly wasted 30 to 45 minutes configuring TypeScript, ESLint, Tailwind CSS, API routes, database clients, and folder architecture. I created Celtrix and published it to the global npm registry so anyone can run 'npx celtrix' and generate a fully configured, production-ready stack in under 10 seconds.",
    features: [
      {
        title: "Instant npx Execution",
        desc: "Zero installation required — runnable globally via 'npx celtrix' on any system with Node.js.",
      },
      {
        title: "Multi-Architecture Templates",
        desc: "Generates 5 modern full-stack templates including Next.js, Hono, MERN, MEAN, and MEVN with pre-configured scripts.",
      },
      {
        title: "Automated Developer Tooling",
        desc: "Initializes Git, environment files, linting rules, and package dependency installation non-interactively.",
      },
    ],
    tags: ["npm Package", "Node.js CLI", "Open Source", "Next.js", "Hono", "TypeScript", "MERN"],
    githubUrl: "https://github.com/AlexBrighten/Celtrix",
    liveUrl: "https://www.npmjs.com/package/celtrix",
    liveLabel: "View on npm",
  },
  {
    id: "portman",
    title: "Portman",
    category: "VS Code Extension",
    year: "2025",
    accent: "#f59e0b",
    shortDescription:
      "Interactive visual port management extension for VS Code that detects and kills network ports without leaving the editor. Features smart detection for 40+ frameworks, terminal EADDRINUSE auto-retry, and Docker awareness.",
    whyIBuiltIt:
      "Every developer has run into 'Error: listen EADDRINUSE: address already in use :::3000' after killing a dev server improperly. Having to switch to terminal, type lsof -i :3000, copy the PID, and type kill -9 breaks flow and wastes valuable minutes. I built Portman directly into VS Code to auto-detect active ports, recognize which framework is running, and terminate zombie processes with a single click.",
    features: [
      {
        title: "One-Click Port Termination",
        desc: "Instantly terminates stubborn network processes directly from the VS Code sidebar or bottom status bar.",
      },
      {
        title: "40+ Framework Recognition",
        desc: "Smart process identification recognizes Next.js, Vite, Express, Django, Docker containers, and more.",
      },
      {
        title: "Terminal EADDRINUSE Watcher",
        desc: "Listens for port collision errors in integrated terminals and offers an instant inline fix button.",
      },
    ],
    tags: ["VS Code Extension", "TypeScript", "Process Monitoring", "Docker", "DevTools"],
    githubUrl: "https://github.com/AlexBrighten/portman",
    liveUrl: "https://github.com/AlexBrighten/portman",
    liveLabel: "GitHub Repo",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <section
        className="relative bg-[#0d0f14] px-0 py-24 md:py-32"
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
              <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#38bdf8]">
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
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-[#ef4444]"
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
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group block cursor-pointer border-t border-white/[0.08] py-8 text-left transition-colors first:border-t-0 hover:bg-[#13151b]/70 md:py-10"
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className="rounded-full border px-3 py-1 font-mono text-xs font-medium"
                        style={{
                          borderColor: `${project.accent}40`,
                          backgroundColor: `${project.accent}15`,
                          color: project.accent,
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs text-[#555]">{project.year}</span>
                      <span className="hidden font-mono text-[0.7rem] text-white/40 transition-colors group-hover:text-white/70 sm:inline">
                        · Click for story & deep dive
                      </span>
                    </div>

                    <h3 className="mb-2 text-2xl font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-[#ef4444] md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="max-w-[580px] text-sm leading-[1.6] text-[#888]">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden flex-wrap gap-2 lg:flex">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] bg-[#13151b] px-3 py-1.5 text-xs text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#191c26] text-white/40 transition-all group-hover:border-[#ef4444]/40 group-hover:bg-[#7f1d1d]/30 group-hover:text-[#ef4444]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-white/[0.06]" />
          </div>
        </div>
      </section>

      {/* Project Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#0b0c10]/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Card - 16:9 Widescreen with TiltCard + macOS Title Bar */}
            <TiltCard max={6} glare className="relative z-10 w-full max-w-[940px]">
              <motion.div
                className="flex aspect-[16/9] flex-col overflow-hidden border border-white/10 bg-[#13151b] shadow-2xl shadow-black/90 rounded-2xl max-md:aspect-auto max-md:max-h-[92vh] max-md:overflow-y-auto"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Top ambient color glow */}
                <div
                  className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-35 blur-[90px]"
                  style={{ backgroundColor: selectedProject.accent }}
                />

                {/* macOS-style Window Title Bar */}
                <div className="relative z-20 flex items-center gap-3 border-b border-white/[0.06] bg-[#0d0f14]/80 px-5 py-3">
                  {/* Traffic light buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="group flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#ff5f57] transition-opacity hover:opacity-80"
                      aria-label="Close"
                    >
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#4a0002" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#febc2e]">
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#5f4b00" strokeWidth="4" strokeLinecap="round" className="opacity-0">
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                    <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#28c840]">
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#005200" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </span>
                  </div>

                  {/* Window title */}
                  <div className="flex flex-1 items-center justify-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: selectedProject.accent }}
                    />
                    <span className="font-mono text-[0.72rem] font-medium text-white/50">
                      {selectedProject.title} — Deep Dive
                    </span>
                  </div>

                  {/* Spacer to center the title */}
                  <div className="w-[52px]" />
                </div>

                {/* 2-Column 16:9 Grid Layout */}
                <div className="grid h-full grid-cols-1 gap-6 p-6 sm:p-7 md:grid-cols-2 md:gap-8 items-stretch">
                  {/* Left Column: Title, Why I Built It & Actions */}
                  <div className="flex flex-col justify-between">
                    <div>
                      {/* Category & Year */}
                      <div className="mb-2.5 flex items-center gap-2.5">
                        <span
                          className="rounded-full border px-3 py-0.5 font-mono text-[0.7rem] font-medium"
                          style={{
                            borderColor: `${selectedProject.accent}50`,
                            backgroundColor: `${selectedProject.accent}15`,
                            color: selectedProject.accent,
                          }}
                        >
                          {selectedProject.category}
                        </span>
                        <span className="font-mono text-xs text-[#666]">
                          {selectedProject.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
                        {selectedProject.title}
                      </h3>

                      {/* Why I Built It - Origin Story */}
                      <div className="mt-4">
                        <div className="mb-2 flex items-center gap-2">
                          <span
                            className="flex h-4 w-4 items-center justify-center text-xs font-bold"
                            style={{ color: selectedProject.accent }}
                          >
                            💡
                          </span>
                          <h4 className="font-mono text-[0.72rem] uppercase tracking-wider text-white/70">
                            Why I Built It & The Problem
                          </h4>
                        </div>

                        <div
                          className="rounded-xl border border-white/[0.06] bg-[#0d0f14] p-3.5 text-xs sm:text-[0.82rem] leading-[1.7] text-white/85"
                          style={{ borderLeftColor: selectedProject.accent, borderLeftWidth: "3px" }}
                        >
                          {selectedProject.whyIBuiltIt}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.06]">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#191c26] px-4 py-2 text-xs font-semibold text-white transition-all hover:border-[#3b82f6]/50 hover:bg-[#1e3a8a]/30 hover:text-white"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                          GitHub Repo
                        </a>
                      )}

                      {selectedProject.liveUrl && selectedProject.liveLabel !== "GitHub Repo" && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-[#ef4444]/40 bg-[#ef4444]/15 px-3.5 py-2 text-xs font-semibold text-[#fca5a5] transition-all hover:border-[#ef4444] hover:bg-[#ef4444]/25 hover:text-white"
                        >
                          {selectedProject.liveLabel}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Engineering Highlights & Tech Stack */}
                  <div className="flex flex-col justify-between">
                    {/* Highlights */}
                    <div>
                      <h4 className="mb-2.5 font-mono text-[0.72rem] uppercase tracking-wider text-white/70">
                        Architecture & Engineering
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {selectedProject.features.map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-2.5 rounded-xl border border-white/[0.05] bg-[#191c26]/60 p-2.5 sm:p-3"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: selectedProject.accent }}
                            />
                            <div className="text-xs sm:text-[0.8rem] leading-[1.55]">
                              <strong className="font-semibold text-white">
                                {item.title}:
                              </strong>{" "}
                              <span className="text-[#999]">{item.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-4 pt-3 border-t border-white/[0.06]">
                      <h4 className="mb-2 font-mono text-[0.7rem] uppercase tracking-wider text-white/50">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.08] bg-[#0d0f14] px-2.5 py-0.5 font-mono text-[0.7rem] text-white/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TiltCard>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
