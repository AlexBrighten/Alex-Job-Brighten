"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroInner}`}>
        <h1 className={styles.title}>
          Alex Job A.
        </h1>

        <p className={styles.subtitle}>
          Aspiring Product Owner (Technical) leveraging strong analytical and problem-solving skills, along with software engineering expertise, to deliver comprehensive end-to-end product design and delivery.
        </p>

        <div className={styles.ctas}>
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Projects Built</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>2026</span>
            <span className={styles.statLabel}>Graduation</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>∞</span>
            <span className={styles.statLabel}>Curiosity</span>
          </div>
        </div>
      </div>
    </section>
  );
}
