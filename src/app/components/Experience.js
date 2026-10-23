"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    id: "hackhive",
    role: "Co-Founder",
    company: "Hackhive",
    timeline: "Jan 2026 – May 2026",
    badge: "0-to-1 Community",
    badgeColor: "#f59e0b", // Amber
    stat: "100+ Builders",
    statLabel: "Acquired & Onboarded",
    description: [
      {
        title: "Zero-to-One Community Building",
        text: "Bootstrapped a student builder community from scratch to foster collaborative ideation, successfully acquiring and onboarding 100+ active members.",
      },
      {
        title: "Extreme Ownership & Hard Calls",
        text: "Navigated the operational friction of premature scaling. Made the difficult decision to downsize the community after realizing our management bandwidth couldn't support the headcount, learning a crucial, real-world lesson in sustainable growth and resource allocation over vanity metrics.",
      },
    ],
    skills: ["Community Building", "0-to-1 Launch", "Resource Allocation", "Member Retention", "Extreme Ownership"],
  },
  {
    id: "livewires",
    role: "Vice President",
    roleSubtitle: "Previously Head of Design",
    company: "Livewires",
    timeline: "Jan 2024 – Mar 2026",
    badge: "Rapid Trajectory",
    badgeColor: "#ef4444", // Crimson
    stat: "14 Months",
    statLabel: "Contributor to VP Promotion",
    description: [
      {
        title: "Rapid Trajectory",
        text: "Promoted from a design contributor to Head of Design, and ultimately Vice President within 14 months, demonstrating high agency and the ability to scale into operational leadership.",
      },
      {
        title: "Cross-Functional Leadership",
        text: "Oversaw core club operations, managing cross-functional student teams to execute strategy, coordinate logistics, and drive university-wide initiatives.",
      },
      {
        title: "Creative Direction",
        text: "As Head of Design, built and led a team of designers to establish a cohesive visual identity, shipping high-quality branding and marketing assets for all club events.",
      },
    ],
    skills: ["Executive Leadership", "Cross-Functional Teams", "Operations", "Creative Direction", "Rapid Scaling"],
  },
  {
    id: "srm-sdg",
    role: "Youth Ambassador (SDG 04 Lead)",
    company: "SRM Institute of Science and Technology",
    timeline: "Dec 2024 & Dec 2025",
    badge: "Scale & Automation",
    badgeColor: "#38bdf8", // Sky / Cobalt
    stat: "3,000+ Attendees",
    statLabel: "350+ Volunteers Managed",
    description: [
      {
        title: "Operational Scale",
        text: 'Headed the SDG 04 (Quality Education) track for the "Symposium on Pathways to Inclusivity, Sustainable Futures and Global Perspectives on Quality Education". Co-managed 350+ volunteers and executed logistics for 3,000+ attendees and 150+ paper presenters.',
      },
      {
        title: "Technical Automation",
        text: "Built a custom certification generator to automate credential distribution for all volunteers, eliminating hours of manual data entry.",
      },
      {
        title: "Cross-Functional Execution",
        text: 'Led the registration team for the 24-hour "Hackfinity 1.0" hackathon. Pitched and closed 3 corporate sponsors to fund the event, and organized the closing cultural extravaganza.',
      },
    ],
    skills: ["Large-Scale Logistics", "Volunteer Management", "Technical Automation", "Sponsor Acquisition", "Hackathon Ops"],
  },
  {
    id: "curious-bees",
    role: "Product Designer & Strategist",
    company: "Curious Bees (SRMIST)",
    timeline: "Feb 2024 – Dec 2024",
    badge: "Product Strategy",
    badgeColor: "#22c55e", // Emerald
    stat: "Ground-Up",
    statLabel: "Platform Design & GTM",
    description: [
      {
        title: "End-to-End Product Strategy",
        text: "Co-led the ground-up design of the platform. Established the complete visual brand identity, including logo and core design system, to ensure a cohesive user experience.",
      },
      {
        title: "Cross-Functional Glue",
        text: "Acted as the critical bridge between business and engineering. Translated high-level goals into technical requirements, managed the feature funnel, and orchestrated the Go-To-Market (GTM) strategy.",
      },
      {
        title: "User-Driven Execution",
        text: "Conducted foundational research and interviews with teachers and end-users to validate assumptions, ruthlessly prioritizing features based on actual market needs rather than guesswork.",
      },
    ],
    skills: ["Design Systems", "User Interviews", "GTM Strategy", "Feature Funnels", "Tech-to-Biz Bridge"],
  },
];

const impactStats = [
  { value: "3,000+", label: "Attendees Scaled", detail: "Symposium Logistics" },
  { value: "350+", label: "Volunteers Co-Managed", detail: "SRMIST Track Lead" },
  { value: "14 Mos", label: "Contributor → VP", detail: "Livewires Trajectory" },
  { value: "100+", label: "Builders Onboarded", detail: "Hackhive Community" },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <div className="stripe-divider" />
      <section
        className="relative overflow-hidden bg-[#0b0c10] px-0 py-24 md:py-32"
        id="experience"
        ref={ref}
      >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[#ef4444]/5 blur-[140px]" />

      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5 max-[480px]:px-4">
        {/* Section header */}
        <motion.div
          className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#ef4444]">
              High-Agency Track Record
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
              Leadership & Experience
            </h2>
          </div>
          <p className="max-w-[460px] text-sm leading-[1.7] text-[#888]">
            Stepping into leadership, resolving operational bottlenecks, and executing from zero-to-one with extreme ownership.
          </p>
        </motion.div>

        {/* High-level Impact Metrics Bar */}
        <motion.div
          className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {impactStats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col justify-between rounded-xl border border-white/[0.07] bg-[#13151b]/80 p-5 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-[#191c26]"
            >
              <div className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                {item.value}
              </div>
              <div className="mt-2">
                <div className="text-xs font-semibold text-white/85">{item.label}</div>
                <div className="font-mono text-[0.7rem] text-[#666]">{item.detail}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experience Timeline Cards */}
        <div className="relative flex flex-col gap-8">
          {/* Vertical timeline guide line for larger screens */}
          <div className="pointer-events-none absolute bottom-6 left-4 top-6 hidden w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent md:block lg:left-6" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#13151b] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#161821] md:p-8 md:pl-16 lg:pl-20"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              {/* Subtle accent hover glow */}
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundColor: `${exp.badgeColor}25` }}
              />

              {/* Timeline node (Desktop) */}
              <div
                className="absolute left-3.5 top-8 hidden h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0b0c10] md:flex lg:left-6"
                aria-hidden="true"
              >
                <span
                  className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: exp.badgeColor }}
                />
              </div>

              {/* Top Row: Role, Company & Timeline */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2.5">
                    <span
                      className="rounded-full border px-3 py-1 font-mono text-[0.7rem] font-medium tracking-wide"
                      style={{
                        borderColor: `${exp.badgeColor}40`,
                        backgroundColor: `${exp.badgeColor}15`,
                        color: exp.badgeColor,
                      }}
                    >
                      {exp.badge}
                    </span>
                    <span className="font-mono text-xs text-[#777] sm:hidden">
                      {exp.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-white md:text-3xl">
                    {exp.role}
                  </h3>

                  {exp.roleSubtitle && (
                    <p className="mt-0.5 text-xs font-medium text-[#f87171]">
                      {exp.roleSubtitle}
                    </p>
                  )}

                  <div className="mt-1.5 flex items-center gap-2 text-sm font-medium text-white/70">
                    <span className="text-white/90">{exp.company}</span>
                  </div>
                </div>

                <div className="hidden flex-col items-end gap-1 sm:flex">
                  <span className="rounded-full border border-white/[0.08] bg-[#191c26] px-3.5 py-1 font-mono text-xs text-white/75">
                    {exp.timeline}
                  </span>
                  <div className="mt-1 flex items-center gap-1.5 font-mono text-[0.72rem] text-[#888]">
                    <span className="font-semibold text-white/90">{exp.stat}</span>
                    <span>· {exp.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Stat badge */}
              <div className="mt-3 flex items-center gap-2 border-y border-white/[0.06] py-2 sm:hidden">
                <span className="font-mono text-xs font-semibold text-white/90">{exp.stat}</span>
                <span className="text-xs text-[#777]">({exp.statLabel})</span>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 flex flex-col gap-4">
                {exp.description.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: exp.badgeColor }}
                    />
                    <p className="text-sm leading-[1.65] text-[#999]">
                      <strong className="font-semibold text-white/90">
                        {item.title}:
                      </strong>{" "}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Competency Tags */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.07] bg-[#191c26]/80 px-3 py-1 font-mono text-[0.72rem] text-white/55 transition-colors group-hover:border-white/[0.12] group-hover:text-white/75"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
