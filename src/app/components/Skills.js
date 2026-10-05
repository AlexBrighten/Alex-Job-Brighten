"use client";

import styles from "./Skills.module.css";

const skillCategories = [
  {
    num: "01",
    title: "Product Strategy & Ownership",
    skills: [
      { name: "Product Strategy & Scoping", level: 90 },
      { name: "Product Roadmaps & Timelines", level: 85 },
      { name: "Technical PRDs & User Stories", level: 85 },
      { name: "Sprint Planning & Backlog Prioritization", level: 80 },
    ],
  },
  {
    num: "02",
    title: "Data Analysis & Problem-Solving",
    skills: [
      { name: "Data & Telemetry Analysis", level: 85 },
      { name: "Usability Testing & Observation", level: 80 },
      { name: "Funnel & Drop-Off Optimization", level: 75 },
      { name: "Competitive Benchmarking", level: 75 },
    ],
  },
  {
    num: "03",
    title: "Leadership & Collaboration",
    skills: [
      { name: "Cross-Functional Squad Leadership", level: 90 },
      { name: "Agile & Scrum Ceremonies", level: 85 },
      { name: "Engineering Stakeholder Alignment", level: 85 },
      { name: "Continuous Discovery Mindset", level: 80 },
    ],
  },
  {
    num: "04",
    title: "Technical Fluency",
    skills: [
      { name: "System Architecture & Data Flows", level: 80 },
      { name: "RESTful & WebSocket APIs", level: 80 },
      { name: "React, Next.js & Node.js", level: 85 },
      { name: "Figma Prototyping & Design Systems", level: 85 },
    ],
  },
];

const tools = [
  "Figma", "React", "Next.js", "Node.js", "Express", "MongoDB",
  "Firebase", "Git & GitHub", "REST APIs", "Socket.io", "Recharts", "Vite"
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          Technical &amp; Product Competencies
        </h2>
        <p className="section-subtitle">
          A blend of strategic product ownership, qualitative user empathy, and software engineering fluency that enables end-to-end delivery.
        </p>

        <div className={styles.skillGrid}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={`mono-card ${styles.skillCard}`}>
              <div className={styles.skillCardHeader}>
                <span className={styles.skillNum}>{cat.num}</span>
                <h3 className={styles.skillCatTitle}>{cat.title}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.toolsSection}>
          <h3 className={styles.toolsTitle}>Tools &amp; Technologies I Work With</h3>
          <div className={styles.toolsGrid}>
            {tools.map((tool) => (
              <div key={tool} className={styles.toolChip}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
