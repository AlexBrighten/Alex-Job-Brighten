"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Learnly",
    tagline: "AI-Assisted Adaptive Learning Platform",
    description:
      "Scoped product strategy and developed an adaptive educational web application using the Gemini API to dynamically tailor course materials to student mastery curves. Evaluated user interaction data and API response latency to optimize prompt pipelines, consolidating core learning flows into an intuitive dashboard.",
    tags: ["Next.js", "React", "Gemini API", "Firebase", "Product Strategy"],
    image: null,
    color: "#3b82f6",
    metrics: [
      { label: "Tech Stack", value: "Next.js & Firebase" },
      { label: "Core AI", value: "Gemini API" },
      { label: "Optimization", value: "Prompt Pipelines" },
    ],
  },
  {
    title: "Spidey Tracker",
    tagline: "Offline-First Analytics PWA",
    description:
      "Conceptualized and launched an installable habit analytics PWA designed for sub-second offline interaction and low-latency. Designed interactive metric dashboards with Recharts. Implemented optimistic UI caching and local storage fallbacks to guarantee seamless data synchronization.",
    tags: ["React", "Vite", "Firestore", "Recharts", "UX Design"],
    image: "/spidey-tracker.png",
    color: "#ef4444",
    metrics: [
      { label: "Performance", value: "Offline-First" },
      { label: "Dashboards", value: "Interactive" },
      { label: "Data Sync", value: "Optimistic UI" },
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
