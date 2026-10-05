"use client";

import styles from "./About.module.css";

const highlights = [
  {
    icon: "💡",
    title: "Product Strategy & Ownership",
    description: "Experienced in product strategy, scoping product roadmaps, and conducting data analysis to inform technical specifications.",
  },
  {
    icon: "📈",
    title: "Data Analysis & Problem-Solving",
    description: "Proficient in user testing, feedback analysis, funnel optimization, and benchmarking drop-off metrics.",
  },
  {
    icon: "🤝",
    title: "Leadership & Soft Skills",
    description: "Strong communication, entrepreneurial mindset, and passion for cross-functional collaboration within Agile/Scrum environments.",
  },
  {
    icon: "⚡",
    title: "Technical Fluency",
    description: "System architecture, RESTful APIs, React, Next.js, and rapid prototyping using Figma.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Bridging <span className="gradient-text">technology</span> and user needs
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "56px" }}>
          As a Computer Applications graduate (BCA), I leverage my background in computer science and software engineering to facilitate effective collaboration among cross-functional teams, driving successful sprint planning and backlog prioritization.
        </p>

        <div className={styles.grid}>
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`glass-card ${styles.card}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
