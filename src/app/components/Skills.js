"use client";

import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Product Strategy & Ownership",
    icon: "🎯",
    skills: [
      { name: "Product Strategy", level: 90 },
      { name: "Product Roadmaps", level: 85 },
      { name: "Technical PRDs", level: 85 },
      { name: "Sprint Planning", level: 80 },
    ],
  },
  {
    title: "Data Analysis & Problem-Solving",
    icon: "📈",
    skills: [
      { name: "Data Analysis", level: 85 },
      { name: "User Testing", level: 80 },
      { name: "Funnel Optimization", level: 75 },
      { name: "Usability Benchmarking", level: 75 },
    ],
  },
  {
    title: "Leadership & Soft Skills",
    icon: "🤝",
    skills: [
      { name: "Communication Skills", level: 90 },
      { name: "Agile/Scrum", level: 85 },
      { name: "Cross-Functional Collab", level: 85 },
      { name: "Entrepreneurial Mindset", level: 80 },
    ],
  },
  {
    title: "Technical Fluency",
    icon: "⚡",
    skills: [
      { name: "System Architecture", level: 80 },
      { name: "RESTful APIs", level: 80 },
      { name: "React & Next.js", level: 85 },
      { name: "Figma Prototyping", level: 85 },
    ],
  },
];

const tools = [
  "Figma", "React", "Next.js", "Firebase", "Git",
  "Google Gemini API", "Recharts", "Vite", "Firestore"
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <span className="section-label">Skills & Tools</span>
        <h2 className="section-title">
          My <span className="gradient-text">toolkit</span> for building great
          products
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "56px" }}>
          A blend of product, design, and technical skills that help me
          contribute across the entire product lifecycle.
        </p>

        <div className={styles.skillGrid}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={`glass-card ${styles.skillCard}`}>
              <div className={styles.skillCardHeader}>
                <span className={styles.skillIcon}>{cat.icon}</span>
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
          <h3 className={styles.toolsTitle}>Tools I Work With</h3>
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
