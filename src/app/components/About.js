"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";

const skillCategories = [
  {
    number: "01",
    title: "Product Strategy & Management",
    skills: [
      { name: "Product Roadmaps & Milestone Scoping", context: "Sequencing value delivery across quarterly horizons" },
      { name: "Technical PRDs & Agile User Stories", context: "Detailed specs with Given/When/Then acceptance criteria" },
      { name: "Backlog Prioritization & Grooming", context: "RICE, MoSCoW, and Impact vs. Effort frameworks" },
      { name: "Jobs-to-be-Done (JTBD) & Personas", context: "Mapping motivations, triggers, and functional outcomes" },
      { name: "Sprint Ceremonies & Agile/Scrum", context: "Running standups, sprint reviews, and retrospectives" },
    ],
  },
  {
    number: "02",
    title: "Product Analytics & Growth",
    skills: [
      { name: "Funnel & Drop-off Optimization", context: "Identifying friction points in activation and checkout" },
      { name: "North Star & Metric Hierarchy", context: "Connecting input metrics to core business retention and GMV" },
      { name: "Usability Testing & Discovery", context: "Conducting user interviews and moderated testing sessions" },
      { name: "Hypothesis Formulation & A/B Tests", context: "Designing testable experiments with guardrail guardrails" },
      { name: "Telemetry & Event Tracking", context: "Defining event taxonomies for user behavior visibility" },
    ],
  },
  {
    number: "03",
    title: "Technical Architecture & Systems",
    skills: [
      { name: "System Architecture & Data Flows", context: "Understanding client-server models, caching, and state machines" },
      { name: "RESTful & WebSocket Protocol APIs", context: "Event-driven real-time updates and API payload contracts" },
      { name: "Client State & Optimistic UI", context: "Local-first persistence and zero-latency user interactions" },
      { name: "Database Schemas & Data Modeling", context: "Document and relational schema design (MongoDB, SQL)" },
      { name: "Engineering Acceptance & QA", context: "Aligning technical edge cases with engineering squads" },
    ],
  },
  {
    number: "04",
    title: "Tools & Technical Stack",
    skills: [
      { name: "Product & Design", context: "Figma, Linear, Jira, Notion, Miro" },
      { name: "Frontend Development", context: "React, Next.js, JavaScript (ES6+), HTML5/CSS3" },
      { name: "Backend & Real-Time", context: "Node.js, Express, Socket.io, REST APIs" },
      { name: "Databases & Cloud", context: "MongoDB, Firebase, IndexedDB" },
      { name: "Tooling & Collaboration", context: "Git, GitHub, Postman, Vercel" },
    ],
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`section-light ${styles.about}`} id="about" ref={ref}>
      <div className="container">
        {/* Concise Section Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge section-badge-light">Profile &amp; Capabilities</span>
          <h2 className="section-title">
            Product Thinking with a<br />Technical Core
          </h2>
          <div className={styles.bioWrapper}>
            <p className={styles.bioLead}>
              I&apos;m Alex Job A., an aspiring Technical Product Manager with a Computer Applications (BCA) foundation from SRM Institute. I bridge the gap between engineering systems and user-centric product strategy—transforming ambiguous customer pain points into structured PRDs, prioritized backlogs, and measurable North Star outcomes.
            </p>
            <p className={styles.bioSub}>
              My focus centers on high-velocity execution: deconstructing complex user funnels, conducting thorough product teardowns, eliminating workflow friction, and aligning cross-functional teams around data-backed hypotheses.
            </p>
          </div>
        </motion.div>

        {/* Skills as a Clean, Structured List */}
        <div className={styles.skillsSection}>
          <div className={styles.skillsSectionHeader}>
            <span className={styles.skillsLabel}>Core Competencies &amp; Technical Skills</span>
            <span className={styles.skillsCount}>4 Domains · 20 Competencies</span>
          </div>

          <div className={styles.skillsGrid}>
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.number}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + catIndex * 0.1 }}
              >
                <div className={styles.categoryHeader}>
                  <span className={styles.categoryNumber}>{category.number}</span>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>

                <ul className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className={styles.skillItem}>
                      <div className={styles.skillBullet} />
                      <div className={styles.skillTextGroup}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillContext}>{skill.context}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
