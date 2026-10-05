"use client";

import { useState } from "react";
import styles from "./CaseStudies.module.css";

const caseStudies = [
  {
    id: "elyon",
    title: "Elyon Luxury E-Commerce",
    subtitle: "Real-Time Inventory Synchronization & High-Conversion Checkout Flow",
    role: "Technical Product Owner & MERN Engineer",
    timeline: "2025",
    tags: ["Product Architecture", "MERN Stack", "Socket.io", "Firebase Auth", "Real-Time Telemetry"],
    summary:
      "Designed and developed a minimalist luxury skincare e-commerce platform solving cart-collision friction and stale inventory states through event-driven WebSockets and optimistic updates.",
    challenge:
      "Boutique skincare buyers expect seamless, elegant purchasing journeys. Conventional polling created stale inventory statuses, race conditions during high-demand SKU drops, and high checkout drop-offs due to delayed order confirmations.",
    solution:
      "Architected a real-time event pipeline using Socket.io and Firebase JWT auth. When stock decrements or orders change state (Confirmed -> Packaging -> Shipped), updates are broadcast instantly to active sessions and administrative telemetry consoles.",
    architecture: [
      { label: "Frontend", desc: "React with Redux state orchestration for zero-flicker cart transitions" },
      { label: "Backend", desc: "Node.js & Express REST API with WebSocket push channels" },
      { label: "Database", desc: "MongoDB schema with transactional consistency for inventory counters" },
      { label: "Security", desc: "Role-based access control (RBAC) via Firebase Auth tokens" },
    ],
    outcomes: [
      "Zero cart-collision errors during concurrent checkout attempts.",
      "Instantaneous order status tracking with real-time push events.",
      "Comprehensive admin dashboard for tracking SKU velocity and sales analytics."
    ]
  },
  {
    id: "spidey-tracker",
    title: "Spidey Tracker: Offline-First Analytics",
    subtitle: "Eliminating Network Latency with Optimistic UI & Local Caching",
    role: "Product Designer & Frontend Engineer",
    timeline: "2024",
    tags: ["Offline-First PWA", "IndexedDB", "Firestore", "Recharts", "Optimistic UI"],
    summary:
      "Engineered an installable habit tracking PWA prioritizing sub-50ms local write latency, ensuring users can record metrics anywhere without reliance on network availability.",
    challenge:
      "Most habit tracking apps suffer severe drop-offs when network latency delays entry confirmations. Users require instant, frictionless capture to maintain daily tracking compliance.",
    solution:
      "Implemented an offline-first caching layer using Service Workers and IndexedDB. UI mutations execute optimistically in real-time, queuing background synchronization to Firestore once connectivity is restored with automatic conflict resolution.",
    architecture: [
      { label: "Client Engine", desc: "Vite + React with progressive web app (PWA) manifest for native feel" },
      { label: "Offline Store", desc: "IndexedDB client-side persistence for immediate interaction latency" },
      { label: "Data Visualization", desc: "Custom SVG analytics dashboards and streak calculators using Recharts" },
      { label: "Cloud Sync", desc: "Firestore offline persistence with timestamp-based conflict reconciliation" },
    ],
    outcomes: [
      "Sub-50ms interaction latency with zero perceived lag.",
      "100% offline uptime ensuring uninterrupted habit tracking routines.",
      "Interactive analytics visualizing weekly streaks and category completion rates."
    ]
  },
  {
    id: "curious-bees",
    title: "SRM Curious Bees Platform & Design System",
    subtitle: "Unifying Campus Workflows & Accelerating Engineering Hand-Offs",
    role: "UX Designer & Product Intern",
    timeline: "2024",
    tags: ["Design System", "User Research", "Agile Backlog", "Usability Testing", "Figma"],
    summary:
      "Spearheaded user research and a unified design system for an in-house campus SaaS platform, translating student needs into structured engineering backlogs.",
    challenge:
      "Disjointed UI components and ad-hoc requirements led to recurring engineering rework, inconsistent student experiences, and prolonged feature delivery timelines.",
    solution:
      "Authored a component design system in Figma mapped 1:1 to reusable front-end tokens. Conducted moderated usability sessions across student cohorts to refine core workflows and drafted technical acceptance criteria for engineering sprints.",
    architecture: [
      { label: "Design System", desc: "40+ accessible UI primitives with documented interaction states" },
      { label: "User Testing", desc: "Moderated usability evaluations with university student cohorts" },
      { label: "Delivery Cadence", desc: "Agile sprint stories with structured Given/When/Then acceptance criteria" },
      { label: "Analytics", desc: "Funnel drop-off benchmarking across onboarding and check-in paths" },
    ],
    outcomes: [
      "Cut user onboarding drop-off and wait times by 40%.",
      "Achieved 100% design-to-code parity across subsequent release cycles.",
      "Established foundational backlog prioritization framework for student volunteers."
    ]
  }
];

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState("elyon");

  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Deep Dives</span>
          <h2 className="section-title">Product Case Studies</h2>
          <p className="section-subtitle">
            Detailed analyses of real problems, architectural decisions, and measurable outcomes across software products I have built and managed.
          </p>
        </div>

        <div className={styles.caseStudyList}>
          {caseStudies.map((study) => {
            const isExpanded = expandedId === study.id;

            return (
              <div
                key={study.id}
                className={`mono-card ${styles.caseCard} ${isExpanded ? styles.expandedCard : ""}`}
              >
                <div
                  className={styles.cardSummaryBar}
                  onClick={() => setExpandedId(isExpanded ? null : study.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExpandedId(isExpanded ? null : study.id);
                    }
                  }}
                >
                  <div className={styles.titleArea}>
                    <div className={styles.metaRow}>
                      <span className={styles.timelineBadge}>{study.timeline}</span>
                      <span className={styles.roleText}>{study.role}</span>
                    </div>
                    <h3 className={styles.studyTitle}>{study.title}</h3>
                    <p className={styles.studySubtitle}>{study.subtitle}</p>
                  </div>

                  <div className={styles.actionArea}>
                    <span className={styles.expandButton}>
                      {isExpanded ? "Collapse Specs —" : "View Case Study +"}
                    </span>
                  </div>
                </div>

                <div className={styles.tagsRow}>
                  {study.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {isExpanded && (
                  <div className={styles.expandedContent}>
                    <div className={styles.gridTwo}>
                      <div className={styles.contentBlock}>
                        <h4 className={styles.blockTitle}>The Problem &amp; Context</h4>
                        <p className={styles.blockText}>{study.challenge}</p>
                      </div>

                      <div className={styles.contentBlock}>
                        <h4 className={styles.blockTitle}>Product Strategy &amp; Solution</h4>
                        <p className={styles.blockText}>{study.solution}</p>
                      </div>
                    </div>

                    <div className={styles.architectureSection}>
                      <h4 className={styles.blockTitle}>Technical Architecture &amp; Implementation</h4>
                      <div className={styles.archGrid}>
                        {study.architecture.map((item) => (
                          <div key={item.label} className={styles.archCard}>
                            <span className={styles.archLabel}>{item.label}</span>
                            <p className={styles.archDesc}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.outcomesSection}>
                      <h4 className={styles.blockTitle}>Key Measurable Outcomes</h4>
                      <ul className={styles.outcomesList}>
                        {study.outcomes.map((outcome, idx) => (
                          <li key={idx} className={styles.outcomeItem}>
                            <span className={styles.outcomeBullet}>&bull;</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
