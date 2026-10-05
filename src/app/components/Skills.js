"use client";

import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Product Management",
    icon: "🎯",
    skills: [
      { name: "User Research", level: 80 },
      { name: "PRDs & Specs", level: 75 },
      { name: "Roadmapping", level: 70 },
      { name: "A/B Testing", level: 65 },
      { name: "Prioritization (RICE)", level: 85 },
    ],
  },
  {
    title: "Design & UX",
    icon: "🎨",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Wireframing", level: 80 },
      { name: "User Flows", level: 85 },
      { name: "Prototyping", level: 70 },
      { name: "Design Thinking", level: 80 },
    ],
  },
  {
    title: "Technical",
    icon: "⚡",
    skills: [
      { name: "React / React Native", level: 70 },
      { name: "SQL & Analytics", level: 65 },
      { name: "APIs & Integrations", level: 60 },
      { name: "Git & Version Control", level: 70 },
      { name: "Firebase", level: 65 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    skills: [
      { name: "Stakeholder Mgmt", level: 75 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Team Collaboration", level: 88 },
      { name: "Storytelling", level: 80 },
    ],
  },
];

const tools = [
  "Figma", "Notion", "Jira", "Mixpanel", "Google Analytics",
  "Miro", "Slack", "Linear", "Amplitude", "SQL",
  "React", "Firebase", "Postman", "Loom", "Excalidraw",
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
