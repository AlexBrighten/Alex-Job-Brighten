"use client";

import styles from "./Hero.module.css";

const heroSkills = [
  {
    category: "Product & Strategy",
    items: ["Technical PRDs", "Product Roadmaps", "Backlog Prioritization", "Agile & Scrum", "User Research"]
  },
  {
    category: "Technical Architecture",
    items: ["React & Next.js", "Node.js & Express", "REST APIs", "System Architecture", "State Management"]
  },
  {
    category: "UX & Analytics",
    items: ["Figma Prototyping", "Usability Testing", "Funnel Optimization", "Data Benchmarking", "Recharts"]
  }
];

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Product Owner (Technical) &amp; Software Builder</span>
        </div>

        <h1 className={styles.title}>
          Alex Job A.
        </h1>

        <p className={styles.subtitle}>
          Aspiring Technical Product Owner leveraging a Computer Applications (BCA) foundation and software engineering expertise to guide products from ambiguous problem discovery through technical specification and iterative delivery.
        </p>

        <div className={styles.ctas}>
          <a href="#case-studies" className="btn-primary">
            View Case Studies
          </a>
          <a href="#approach" className="btn-secondary">
            My Dev Approach
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        {/* Replaced metrics with skills highlight */}
        <div className={styles.skillsContainer}>
          <div className={styles.skillsHeader}>
            <span className={styles.skillsLabel}>Core Competencies &amp; Toolkit</span>
          </div>

          <div className={styles.skillsGrid}>
            {heroSkills.map((group) => (
              <div key={group.category} className={styles.skillGroup}>
                <span className={styles.groupTitle}>{group.category}</span>
                <div className={styles.pillList}>
                  {group.items.map((skill) => (
                    <span key={skill} className={styles.skillPill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
