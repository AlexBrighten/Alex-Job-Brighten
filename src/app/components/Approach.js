"use client";

import { useState } from "react";
import styles from "./Approach.module.css";

const phases = [
  {
    step: "01",
    phase: "Discovery & Validation",
    title: "Understanding the 'Why' & Scoping the Real Problem",
    summary:
      "Before writing PRDs or designing solutions, I validate problem significance through quantitative telemetry and direct user feedback.",
    deliverables: ["Problem Statements", "User Journey Maps", "Funnel Drop-Off Benchmarking", "Success Metrics (KPIs)"],
    details: [
      "Conduct qualitative stakeholder and user interviews to isolate core user friction points.",
      "Analyze funnel metrics and behavioral telemetry to evaluate market viability and problem scale.",
      "Synthesize problem statements with clear boundary constraints to prevent scope creep early."
    ]
  },
  {
    step: "02",
    phase: "Technical Specification",
    title: "Drafting PRDs & Architecting Systems",
    summary:
      "Bridging the gap between product vision and engineering reality through precise technical specifications and system design.",
    deliverables: ["Technical PRDs", "API Contract Drafts", "Data Models & ERDs", "Acceptance Criteria"],
    details: [
      "Author structured technical PRDs with exhaustive edge cases and Given/When/Then acceptance criteria.",
      "Collaborate with engineering leads on data schemas, REST/WebSocket API endpoints, and caching strategies.",
      "Evaluate trade-offs between delivery velocity and architectural scalability to avoid accumulating technical debt."
    ]
  },
  {
    step: "03",
    phase: "Agile Execution",
    title: "Vertical Slicing & Engineering Enablement",
    summary:
      "Driving sprint cadence, unblocking developers, and shipping vertical end-to-end increments rather than stalled horizontal layers.",
    deliverables: ["Sprint Backlogs", "Milestone Tracking", "Dependency Mapping", "Interactive Prototypes"],
    details: [
      "Break complex product epics into vertically shippable slices that deliver immediate testable user value.",
      "Run disciplined sprint ceremonies: backlog grooming, planning, asynchronous status updates, and retrospectives.",
      "Protect engineering squads from extraneous noise while ensuring alignment with core product objectives."
    ]
  },
  {
    step: "04",
    phase: "Telemetry & Iteration",
    title: "Closing the Loop with Telemetry & Feedback",
    summary:
      "Shipping is just the halfway mark. Continuous instrumentation and usability observation dictate the iteration roadmap.",
    deliverables: ["Product Telemetry Dashboards", "Usability Test Reports", "Post-Launch Retrospectives", "Iteration Roadmap"],
    details: [
      "Instrument core event funnels and error monitors to measure real-world performance against pre-launch hypotheses.",
      "Conduct usability benchmarks and synthesize qualitative sentiment to uncover latent friction.",
      "Iterate backlog priorities based on data-backed findings to systematically compound product value."
    ]
  }
];

export default function Approach() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section" id="approach">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Philosophy &amp; Execution</span>
          <h2 className="section-title">Approach to Software Development</h2>
          <p className="section-subtitle">
            How I bridge technical fluency with strategic product thinking to guide ideas from ambiguous discovery to reliable, scalable production systems.
          </p>
        </div>

        {/* Phase selector tabs */}
        <div className={styles.stepperNav}>
          {phases.map((p, idx) => (
            <button
              key={p.step}
              className={`${styles.stepTab} ${activeStep === idx ? styles.activeTab : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              <span className={styles.tabStep}>{p.step}</span>
              <span className={styles.tabPhase}>{p.phase}</span>
            </button>
          ))}
        </div>

        {/* Active Phase Card */}
        <div className={`mono-card ${styles.activeCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardMeta}>
              <span className={styles.activeStepNumber}>Phase {phases[activeStep].step}</span>
              <span className={styles.activePhaseTag}>{phases[activeStep].phase}</span>
            </div>
            <h3 className={styles.cardTitle}>{phases[activeStep].title}</h3>
            <p className={styles.cardSummary}>{phases[activeStep].summary}</p>
          </div>

          <div className={styles.cardBody}>
            <div className={styles.detailsCol}>
              <h4 className={styles.columnTitle}>Key Actions &amp; Practices</h4>
              <ul className={styles.detailList}>
                {phases[activeStep].details.map((point, i) => (
                  <li key={i} className={styles.detailItem}>
                    <span className={styles.bullet}>&bull;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.deliverablesCol}>
              <h4 className={styles.columnTitle}>Core Artifacts &amp; Deliverables</h4>
              <div className={styles.deliverableGrid}>
                {phases[activeStep].deliverables.map((item, i) => (
                  <div key={i} className={styles.deliverableChip}>
                    <span className={styles.checkIcon}>&check;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className={styles.principlesSection}>
          <h3 className={styles.principlesTitle}>Core Development Principles</h3>
          <div className={styles.principlesGrid}>
            <div className={`mono-card ${styles.principleCard}`}>
              <span className={styles.principleNum}>01</span>
              <h4>Outcome over Output</h4>
              <p>Shipping features does not equate to value. Every sprint increment must tie directly to solved user friction or business viability.</p>
            </div>
            <div className={`mono-card ${styles.principleCard}`}>
              <span className={styles.principleNum}>02</span>
              <h4>High Technical Empathy</h4>
              <p>Speaking the language of engineers prevents unrealistic deadlines, reduces architectural rework, and fosters mutual trust.</p>
            </div>
            <div className={`mono-card ${styles.principleCard}`}>
              <span className={styles.principleNum}>03</span>
              <h4>Relentless Simplification</h4>
              <p>The best feature is often the one you didn&apos;t have to build. Cut cognitive clutter and keep interfaces intuitive and lightweight.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
