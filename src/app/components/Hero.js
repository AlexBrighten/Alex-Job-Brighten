"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Animated background orbs */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgOrb3} />
      <div className={styles.gridOverlay} />

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-slide-up`}>
            <span className={styles.badgeDot} />
            Open to PM Opportunities
          </div>

          <h1 className={`${styles.title} animate-slide-up animate-delay-1`}>
            Hi, I&apos;m{" "}
            <span className="gradient-text">Alex Job A</span>
          </h1>

          <p className={`${styles.subtitle} animate-slide-up animate-delay-2`}>
            Aspiring <strong>Product Manager</strong> passionate about building
            user-centric products that solve real problems. I bridge the gap
            between engineering, design, and business.
          </p>

          <div className={`${styles.ctas} animate-slide-up animate-delay-3`}>
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get in Touch
            </a>
          </div>

          <div className={`${styles.stats} animate-slide-up animate-delay-4`}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>800hr</span>
              <span className={styles.statLabel}>Study Goal</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Curiosity</span>
            </div>
          </div>
        </div>

        <div className={`${styles.avatarWrapper} animate-slide-up animate-delay-2`}>
          <div className={styles.avatarGlow} />
          <div className={styles.avatarRing}>
            <Image
              src="/avatar.jpg"
              alt="Alex Job A - Aspiring Product Manager"
              width={400}
              height={400}
              priority
              className={styles.avatar}
            />
          </div>
          <div className={styles.floatingCard1}>
            <span>🚀</span> Product Strategy
          </div>
          <div className={styles.floatingCard2}>
            <span>📊</span> Data-Driven
          </div>
          <div className={styles.floatingCard3}>
            <span>🎯</span> User First
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
