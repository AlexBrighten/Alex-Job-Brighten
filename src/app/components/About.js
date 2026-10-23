"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Product Strategy",
  "Market Research",
  "Competitive Analysis",
  "Data Analytics",
  "Stakeholder Management",
  "GTM Planning",
  "React / Next.js",
  "Node.js",
  "SQL & Dashboards",
  "Business Operations",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative overflow-hidden bg-[#0a0a0a] px-0 py-24 md:py-32"
      id="about"
      ref={ref}
    >
      <div className="mx-auto max-w-[1200px] px-8 max-md:px-5 max-[480px]:px-4">
        {/* Floating badges + Heading area */}
        <div className="relative mx-auto max-w-[750px] py-12 text-center">
          {/* Floating badges */}
          <motion.div
            className="absolute -top-2 left-0 md:left-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#141416] px-4 py-2 text-xs font-medium text-[#ccc] shadow-lg shadow-black/20">
              <span className="text-sm">⚡</span> Cross-Functional
            </span>
          </motion.div>

          <motion.div
            className="absolute right-0 top-4 md:right-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#141416] px-4 py-2 text-xs font-medium text-[#ccc] shadow-lg shadow-black/20">
              <span className="text-sm">◎</span> Data-Driven
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            className="mb-6 text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Technical Thinker Who Gets Things Done
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mx-auto mb-8 max-w-[600px] text-base leading-[1.7] text-[#888]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            BCA student at SRM Institute with hands-on experience in product teardowns, full-stack development, and business operations. I thrive in ambiguity—give me the founder&apos;s biggest headache and I&apos;ll come back with a structured plan and a working prototype.
          </motion.p>

          {/* Bottom floating badges */}
          <motion.div
            className="absolute -bottom-2 left-4 md:left-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#141416] px-4 py-2 text-xs font-medium text-[#ccc] shadow-lg shadow-black/20">
              <span className="text-sm">🚀</span> Ship Fast
            </span>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 right-2 md:right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#141416] px-4 py-2 text-xs font-medium text-[#ccc] shadow-lg shadow-black/20">
              <span className="text-sm">🔧</span> Builder Mindset
            </span>
          </motion.div>
        </div>

        {/* Skills ticker */}
        <motion.div
          className="mt-20 border-t border-white/[0.06] pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#666]">
              Skills & Capabilities
            </span>
            <span className="font-mono text-xs text-[#444]">
              {skills.length} Competencies
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="rounded-full border border-white/[0.06] bg-[#111113] px-5 py-2.5 text-sm font-medium text-[#a0a0a0] transition-all hover:border-white/[0.12] hover:bg-[#1a1a1c] hover:text-white"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.04 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { number: "6", label: "Product Teardowns" },
            { number: "3", label: "Shipped Projects" },
            { number: "BCA", label: "SRM Institute" },
            { number: "10+", label: "Skills & Tools" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-[#0e0e10] px-6 py-8 text-center"
            >
              <span className="text-3xl font-bold text-white">{stat.number}</span>
              <span className="text-xs uppercase tracking-wider text-[#666]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
