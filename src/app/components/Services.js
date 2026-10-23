"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Product & Strategy",
    description: "Product teardowns, competitive analysis, user funnels, JTBD frameworks, and PRD drafting — structured thinking to help founders cut through noise.",
    features: ["Product Teardowns", "Market Research", "PRDs & Specs", "RICE Prioritization"],
  },
  {
    number: "02",
    title: "Technical Execution",
    description: "I don't just write specs — I build. Full-stack web development, real-time systems, and data pipelines to prototype and ship fast.",
    features: ["React / Next.js", "Node.js / APIs", "Databases", "Real-Time Systems"],
  },
  {
    number: "03",
    title: "Growth & Operations",
    description: "Funnel analysis, activation experiments, onboarding optimization, and go-to-market planning to drive measurable business outcomes.",
    features: ["Funnel Optimization", "A/B Testing", "GTM Strategy", "KPI Dashboards"],
  },
  {
    number: "04",
    title: "Cross-Functional Glue",
    description: "The person between engineering, design, and business. I translate founder vision into structured backlogs, sprint plans, and stakeholder updates.",
    features: ["Stakeholder Mgmt", "Sprint Planning", "Agile Workflows", "Presentation Decks"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative bg-[#0a0a0a] px-0 py-24 md:py-32"
      id="services"
      ref={ref}
    >
      {/* Stripe divider top */}
      <div className="stripe-divider absolute left-0 right-0 top-0" />

      <div className="mx-auto max-w-[1200px] px-8 pt-8 max-md:px-5 max-[480px]:px-4">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-[#666]">
            What I Bring to the Table
          </span>
          <h2 className="mb-5 text-4xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Capabilities & Strengths
          </h2>
          <p className="max-w-[560px] text-base leading-[1.7] text-[#888]">
            A founder&apos;s office needs someone who can switch between strategy, execution, and operations — I do all three.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111113] p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-[#141416] md:p-10"
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              {/* Hover glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#c8ff00]/[0.03] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Number */}
                <span className="mb-6 inline-block font-mono text-sm font-semibold text-[#444]">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold tracking-[-0.02em] text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-8 text-sm leading-[1.65] text-[#888]">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[#777]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
