"use client";

import styles from "./Education.module.css";

const educationDetails = {
  institution: "SRM Institute of Science and Technology",
  location: "Chennai, India",
  degree: "Bachelor of Computer Applications (BCA)",
  track: "Computer Science Track",
  gradDate: "Jun 2026",
  grade: "CGPA: 7.53 / 10.0",
  coursework: [
    "Software Engineering",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Web Application Development",
    "System Architecture"
  ],
  highlights: [
    "Built foundational technical literacy in computer science principles, enabling fluent communication with engineering squads and rigorous technical PRD authoring.",
    "Combined core software engineering coursework with active leadership roles across university symposiums and in-house product teams.",
    "Available for Associate Product Manager (APM) / Technical PM roles (2026 - 2027)."
  ]
};

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Academic Background</span>
          <h2 className="section-title">Education &amp; Foundations</h2>
          <p className="section-subtitle">
            Formal grounding in computer science and software engineering that powers my technical product management.
          </p>
        </div>

        <div className={`mono-card ${styles.educationCard}`}>
          <div className={styles.topRow}>
            <div className={styles.degreeArea}>
              <span className={styles.trackBadge}>{educationDetails.track}</span>
              <h3 className={styles.degreeTitle}>{educationDetails.degree}</h3>
              <p className={styles.institution}>
                {educationDetails.institution} &middot; {educationDetails.location}
              </p>
            </div>

            <div className={styles.metaBadgeBox}>
              <span className={styles.gradDate}>Graduated: {educationDetails.gradDate}</span>
              <span className={styles.gradeBadge}>{educationDetails.grade}</span>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.contentGrid}>
            <div className={styles.courseworkCol}>
              <h4 className={styles.columnTitle}>Core Technical Foundations</h4>
              <div className={styles.courseChips}>
                {educationDetails.coursework.map((course) => (
                  <span key={course} className={styles.courseChip}>
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.highlightsCol}>
              <h4 className={styles.columnTitle}>Key Takeaways</h4>
              <ul className={styles.highlightsList}>
                {educationDetails.highlights.map((h, i) => (
                  <li key={i} className={styles.highlightItem}>
                    <span className={styles.bullet}>&bull;</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
