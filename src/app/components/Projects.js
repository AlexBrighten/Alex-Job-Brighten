"use client";

import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Elyon Luxury E-Commerce",
    tagline: "Premium Skincare Platform",
    description:
      "A modern, high-end, minimalistic e-commerce platform built on the MERN stack for premium skincare brands. Features real-time order tracking via Socket.io, robust Firebase authentication, advanced filtering, and a comprehensive admin dashboard for sales analytics.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Firebase", "Redux"],
    image: null,
    color: "#a855f7",
    metrics: [
      { label: "Updates", value: "Real-time" },
      { label: "Auth", value: "Firebase + JWT" },
      { label: "Stack", value: "MERN" },
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
        <h2 className="section-title">
          Things I&apos;ve built & shipped
        </h2>
        <p className="section-subtitle">
          From apps to analysis frameworks — here&apos;s what I&apos;ve been
          working on to sharpen my product skills.
        </p>

        <div className={styles.projectList}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`mono-card ${styles.projectCard}`}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectNumber}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
