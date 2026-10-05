"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Spidey Tracker",
    tagline: "Productivity & Focus Tracking App",
    description:
      "A gamified productivity app with progress tracking toward an 800-hour study goal. Features include focus sessions, habit streaks, analytics dashboard, and day goal planning — all wrapped in a fun Spider-Man theme.",
    tags: ["React Native", "Firebase", "UX Design", "Gamification"],
    image: "/spidey-tracker.png",
    color: "#ef4444",
    metrics: [
      { label: "Focus Sessions", value: "Timer-based" },
      { label: "Analytics", value: "Real-time" },
      { label: "Habit Tracking", value: "Daily streaks" },
    ],
  },
  {
    title: "Product Teardowns",
    tagline: "Deep-dive Analysis Collection",
    description:
      "A curated collection of product teardowns analyzing apps like Notion, Figma, and Linear — examining their onboarding flows, retention loops, and monetization strategies from a PM perspective.",
    tags: ["Product Analysis", "UX Research", "Strategy", "Writing"],
    image: null,
    color: "#7c3aed",
    metrics: [
      { label: "Apps Analyzed", value: "5+" },
      { label: "Framework", value: "AARRR" },
      { label: "Depth", value: "Full funnel" },
    ],
  },
  {
    title: "Feature Prioritization Framework",
    tagline: "Decision-Making Tool for PMs",
    description:
      "Built a custom RICE scoring framework to help product teams objectively evaluate and prioritize feature requests. Includes weighted scoring, impact visualization, and team voting.",
    tags: ["Spreadsheets", "Data Analysis", "RICE", "PM Tools"],
    image: null,
    color: "#3b82f6",
    metrics: [
      { label: "Methodology", value: "RICE" },
      { label: "Input", value: "Multi-team" },
      { label: "Output", value: "Ranked list" },
    ],
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">
          Things I&apos;ve <span className="gradient-text">built & shipped</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "56px" }}>
          From apps to analysis frameworks — here&apos;s what I&apos;ve been
          working on to sharpen my product skills.
        </p>

        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card ${styles.projectCard}`}
              style={{ "--project-color": project.color }}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <span
                    className={styles.projectNumber}
                    style={{ color: project.color }}
                  >
                    0{i + 1}
                  </span>
                  <span className={styles.projectTagline}>
                    {project.tagline}
                  </span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.metrics}>
                  {project.metrics.map((m) => (
                    <div key={m.label} className={styles.metric}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.image && (
                <div className={styles.projectImageWrapper}>
                  <div
                    className={styles.projectImageBg}
                    style={{ background: `${project.color}15` }}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={600}
                    className={styles.projectImage}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
