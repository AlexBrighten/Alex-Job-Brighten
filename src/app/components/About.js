"use client";

import styles from "./About.module.css";

const highlights = [
  {
    icon: "💡",
    title: "Product Thinking",
    description: "I approach every problem by understanding the user first, then aligning business goals with technical feasibility.",
  },
  {
    icon: "📐",
    title: "Design Sensibility",
    description: "From wireframes to prototypes, I craft experiences that are intuitive, delightful, and purposeful.",
  },
  {
    icon: "📈",
    title: "Data-Informed",
    description: "I believe in measuring what matters — tracking KPIs, running experiments, and iterating based on evidence.",
  },
  {
    icon: "🤝",
    title: "Cross-Functional",
    description: "I thrive at the intersection of engineering, design, and business — bringing teams together to ship great products.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">
          Turning <span className="gradient-text">ideas</span> into products
          people love
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "56px" }}>
          I&apos;m a builder at heart — someone who gets equally excited about
          user research sessions and sprint planning. Currently on a mission to
          log 800 hours of deep product work.
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
