"use client";

import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Event Operations Lead & Youth Ambassador",
    company: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    date: "Nov 2024 – Feb 2026",
    achievements: [
      "Directed large-scale operational workflows and registration infrastructure for an international symposium supporting 3,000+ delegates with zero operational downtime.",
      "Coordinated cross-functional workstreams across 250+ faculty and student volunteers, establishing task milestones and tracking critical path dependencies to accelerate delivery.",
      "Managed attendee check-in funnels and on-site logistics, analyzing bottlenecks in real time to cut onboarding wait times by 40%.",
      "Partnered with 11 fellow Youth Ambassadors (SDG 4) and university leadership to align agendas and technical requirements for 60+ international keynote speakers.",
    ],
  },
  {
    role: "User Experience Designer Intern",
    company: "SRM Curious Bees",
    location: "Chennai, India",
    date: "Mar 2024 – Aug 2024",
    achievements: [
      "Led end-to-end product design and user research for “SRM Curious Bees” (in-house SaaS platform), establishing core information architecture and user journeys.",
      "Collaborated closely with engineering squads to translate Figma prototypes into structured backlog specifications, ensuring 100% technical feasibility and design parity.",
      "Conducted moderated usability testing sessions across student cohorts, synthesizing qualitative feedback to drive iterative interface improvements.",
      "Built and maintained the platform’s modular design system, standardizing UI components across subsequent release cycles.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">
          Where I&apos;ve made an impact
        </h2>
        <p className="section-subtitle">
          My professional journey driving product execution, cross-functional collaboration, and user-centric design.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={`mono-card ${styles.experienceCard}`}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company} &middot; {exp.location}</p>
                  </div>
                  <div className={styles.date}>{exp.date}</div>
                </div>
                <ul className={styles.achievements}>
                  {exp.achievements.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
