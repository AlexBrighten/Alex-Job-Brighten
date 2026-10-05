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
        <h2 className="section-title">
          Bridging technology and user needs
        </h2>
        <p className="section-subtitle">
          As a Computer Applications graduate (BCA), I leverage my background in computer science and software engineering to facilitate effective collaboration among cross-functional teams, driving successful sprint planning and backlog prioritization.
        </p>

        <div className={styles.grid}>
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`mono-card ${styles.card}`}
            >
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
