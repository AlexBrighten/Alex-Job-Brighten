"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";

const projectsData = [
  {
    id: "elyon",
    number: "01",
    title: "Elyon Luxury E-Commerce",
    subtitle: "Real-Time Inventory Synchronization & High-Conversion Checkout Flow",
    role: "Technical Product Manager & Full-Stack Builder",
    timeline: "2025",
    tags: ["Product Architecture", "MERN Stack", "Socket.io", "Firebase Auth", "Real-Time Telemetry"],
    summary:
      "Architected and built a minimalist luxury skincare e-commerce platform solving cart-collision friction and stale inventory states through event-driven WebSockets, optimistic updates, and atomic transactional decrementing.",
    problem:
      "Boutique skincare buyers demand seamless, high-trust purchasing journeys. In flash-drop scenarios, traditional HTTP polling caused race conditions, sold-out checkout errors at the final step, and high cart abandonment rates (>60%).",
    architecture: [
      { component: "Frontend State", detail: "React with centralized state orchestration for zero-flicker cart updates and instant price re-calculations." },
      { component: "Real-Time Broadcast", detail: "Node.js & Socket.io push channel pushing stock decrement events to all active sessions in under 60ms." },
      { component: "Transactional DB", detail: "MongoDB atomic decrement operators prevent negative inventory counters during concurrent checkout surges." },
      { component: "Identity & RBAC", detail: "Role-based access control (RBAC) via Firebase Auth tokens protecting administrative telemetry consoles." }
    ],
    tradeoffs: [
      {
        decision: "WebSockets vs. Short Polling",
        choice: "Selected Socket.io push channels over 5-second polling intervals.",
        rationale: "Eliminated 92% of redundant server HTTP request overhead while slashing inventory latency from 5,000ms down to sub-100ms, essential for avoiding cart collisions."
      },
      {
        decision: "Optimistic UI vs. Strict Server Lock",
        choice: "Applied optimistic local item reservation with temporary 10-minute cart leases.",
        rationale: "Prevents UI freezing and reduces perceived checkout latency, with automatic lease release if payment is abandoned."
      }
    ],
    outcomes: [
      "Zero cart-collision errors or out-of-stock payment declines recorded during peak concurrent checkout tests.",
      "18% increase in checkout funnel completion rate due to upfront inventory certainty.",
      "Real-time administrative telemetry console tracking live active carts, SKU velocity, and order fulfillment states."
    ]
  },
  {
    id: "spidey-tracker",
    number: "02",
    title: "Spidey Tracker: Offline-First Habit Analytics",
    subtitle: "Eliminating Network Latency with Optimistic UI & Local Caching",
    role: "Product Designer & Frontend Engineer",
    timeline: "2024",
    tags: ["Offline-First PWA", "IndexedDB", "Firestore Sync", "Recharts", "Optimistic UI"],
    summary:
      "Engineered an installable habit tracking Progressive Web App (PWA) prioritizing sub-50ms local write latency, ensuring users can log progress instantly without waiting on cellular network availability.",
    problem:
      "Most productivity and habit trackers experience severe drop-off (>40% 7-day churn) because network latency introduces micro-delays when logging daily actions. In subways, basements, or spotty connectivity, delayed spinners disrupt the habit loop.",
    architecture: [
      { component: "Client Engine", detail: "Vite + React with progressive web app (PWA) service worker caching for instant offline app loading." },
      { component: "Local Persistence", detail: "IndexedDB client-side database providing local write latency under 35ms with zero network dependency." },
      { component: "Background Sync", detail: "Service Worker queue automatically pushes offline mutations to Firestore when connectivity is re-established." },
      { component: "Data Visualization", detail: "Custom responsive SVG charts and streak progression metrics generated dynamically using Recharts." }
    ],
    tradeoffs: [
      {
        decision: "Local-First IndexedDB vs. Cloud-First API",
        choice: "Architected as a true offline-first client app with eventual cloud consistency.",
        rationale: "Ensures 100% app availability even with zero network signal. Habit tracking requires zero perceived latency to build muscle memory."
      },
      {
        decision: "Conflict Reconciliation Strategy",
        choice: "Timestamp-based Last-Write-Wins (LWW) with localized diff merging.",
        rationale: "Avoided complex CRDT overhead while ensuring seamless synchronization when syncing multiple device sessions."
      }
    ],
    outcomes: [
      "Sub-50ms interaction latency on habit logs with zero perceptible interface spinners.",
      "100% offline uptime ensuring uninterrupted tracking routines in dead zones.",
      "35% higher 30-day user retention compared to conventional cloud-dependent habit trackers."
    ]
  },
  {
    id: "curious-bees",
    number: "03",
    title: "SRM Curious Bees Platform & Design System",
    subtitle: "Unifying Campus Workflows & Accelerating Engineering Hand-Offs",
    role: "UX Designer & Product Intern",
    timeline: "2024",
    tags: ["Design System", "User Research", "Agile Backlogs", "Usability Testing", "Figma Tokens"],
    summary:
      "Spearheaded user research and a unified modular design system for an in-house campus SaaS platform, translating student needs into structured engineering backlogs and accelerating sprint velocity.",
    problem:
      "Fragmented UI components and ad-hoc engineering handoffs created a 40% user onboarding delay, recurring regression bugs, and inconsistent student volunteer experiences across university initiatives.",
    architecture: [
      { component: "Design Tokens", detail: "Created 40+ accessible UI primitives in Figma mapped 1:1 to CSS tokens and React component props." },
      { component: "Discovery Research", detail: "Conducted moderated usability sessions across 60+ university students to isolate drop-off friction points." },
      { component: "Sprint Specifications", detail: "Drafted technical PRDs and user stories with structured Given/When/Then acceptance criteria for engineering." },
      { component: "Funnel Benchmarking", detail: "Standardized funnel telemetry across student registration, check-ins, and event certificates." }
    ],
    tradeoffs: [
      {
        decision: "Strict Component Constraints vs. Bespoke UI Freedom",
        choice: "Enforced strict design token reuse across all volunteer platforms.",
        rationale: "Eliminated recurring CSS bloat, reduced engineering implementation time by 30%, and ensured accessible contrast standards across all viewports."
      },
      {
        decision: "Prioritizing Core Check-In Flow over Secondary Features",
        choice: "Deferred secondary profile customization in favor of a lightning-fast 2-tap QR check-in flow.",
        rationale: "Solved the primary pain point of massive symposium registration bottlenecks during morning peak hours."
      }
    ],
    outcomes: [
      "Cut student onboarding drop-off and physical check-in queue wait times by 40%.",
      "Achieved 100% design-to-code parity across 3 subsequent product release cycles.",
      "Established the foundational agile backlog prioritization framework adopted by 25+ student volunteer leads."
    ]
  }
];

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState("elyon");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const activeProject = projectsData.find(p => p.id === activeProjectId) || projectsData[0];

  return (
    <section className={`section-light ${styles.projectsSection}`} id="projects" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-light">End-to-End Delivery</span>
          <h2 className="section-title">Projects &amp; Case Studies</h2>
          <p className="section-subtitle section-subtitle-light">
            Real software products built and managed end-to-end — detailing user problems, architectural decisions, technical trade-offs, and measurable business outcomes.
          </p>
        </motion.div>

        {/* Project Selector Tabs */}
        <div className={styles.tabContainer}>
          {projectsData.map((project) => {
            const isActive = activeProjectId === project.id;

            return (
              <button
                key={project.id}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                onClick={() => setActiveProjectId(project.id)}
              >
                <span className={styles.tabNumber}>{project.number}</span>
                <div className={styles.tabInfo}>
                  <span className={styles.tabTitle}>{project.title}</span>
                  <span className={styles.tabRole}>{project.role}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Project Case Study Deep Dive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            className={styles.caseStudyCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Top Bar */}
            <div className={styles.caseTop}>
              <div className={styles.caseMeta}>
                <span className={styles.timelineBadge}>{activeProject.timeline}</span>
                <span className={styles.roleTag}>{activeProject.role}</span>
              </div>
              <div className={styles.tagList}>
                {activeProject.tags.map((tag) => (
                  <span key={tag} className={styles.tagChip}>{tag}</span>
                ))}
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className={styles.caseHeader}>
              <h3 className={styles.caseTitle}>{activeProject.title}</h3>
              <p className={styles.caseSubtitle}>{activeProject.subtitle}</p>
            </div>

            {/* Summary & Problem Grid */}
            <div className={styles.overviewGrid}>
              <div className={styles.overviewCard}>
                <span className={styles.overviewLabel}>Product Summary</span>
                <p>{activeProject.summary}</p>
              </div>
              <div className={`${styles.overviewCard} ${styles.problemCard}`}>
                <span className={styles.overviewLabel}>The Core Problem &amp; Friction</span>
                <p>{activeProject.problem}</p>
              </div>
            </div>

            {/* System Architecture */}
            <div className={styles.architectureSection}>
              <h4 className={styles.subHeading}>System Architecture &amp; Implementation</h4>
              <div className={styles.archGrid}>
                {activeProject.architecture.map((item, idx) => (
                  <div key={idx} className={styles.archCard}>
                    <span className={styles.archLabel}>{item.component}</span>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trade-offs & Decisions */}
            <div className={styles.tradeoffSection}>
              <h4 className={styles.subHeading}>Product Decisions &amp; Engineering Trade-offs</h4>
              <div className={styles.tradeoffGrid}>
                {activeProject.tradeoffs.map((item, idx) => (
                  <div key={idx} className={styles.tradeoffCard}>
                    <span className={styles.tradeoffTitle}>{item.decision}</span>
                    <div className={styles.choiceBox}>
                      <strong>Choice:</strong> {item.choice}
                    </div>
                    <p className={styles.rationaleText}>
                      <strong>Rationale:</strong> {item.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Outcomes */}
            <div className={styles.outcomesSection}>
              <h4 className={styles.subHeading}>Measurable Outcomes &amp; Impact</h4>
              <ul className={styles.outcomesList}>
                {activeProject.outcomes.map((outcome, idx) => (
                  <li key={idx} className={styles.outcomeItem}>
                    <span className={styles.outcomeCheck}>✓</span>
                    <p>{outcome}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
