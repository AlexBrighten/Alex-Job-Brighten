"use client";

import { useState } from "react";
import styles from "./ProductTeardowns.module.css";

const teardowns = [
  {
    id: "notion",
    product: "Notion",
    category: "Productivity & Workspace Architecture",
    headline: "Block-Level Abstraction & The Friction of Infinite Flexibility",
    tags: ["Data Modeling", "Client State", "UX Friction", "Onboarding Retention"],
    coreQuestion: "How does Notion balance atomic flexibility with initial user overwhelm?",
    observations: [
      {
        aspect: "Architectural Primitive",
        detail: "Every element in Notion is an atomic block with a unified schema. This unlocks endless nested combinations but creates a client-side tree reconciliation overhead on heavy documents."
      },
      {
        aspect: "UX Friction Point",
        detail: "The 'blank page paralysis'. New non-technical users struggle to structure databases, relations, and rollups without pre-existing mental models, creating drop-off before Day 7."
      },
      {
        aspect: "Sync Mechanics",
        detail: "Uses an operational transformation / CRDT-like protocol with optimistic client updates to keep multiplayer editing fluid, though deeply nested relations can cause noticeable re-renders."
      }
    ],
    pmRecommendation:
      "Introduce goal-specific contextual onboarding workflows (e.g., 'Sprint Tracker' vs 'Personal Wiki') that pre-configure relations and views dynamically, reducing Time-to-First-Value (TTFV) by an estimated 35% compared to static template galleries."
  },
  {
    id: "linear",
    product: "Linear",
    category: "Developer Ergonomics & Issue Tracking",
    headline: "Optimistic UI, Keyboard Primacy & Zero-Latency Habit Loops",
    tags: ["Optimistic UI", "Local-First", "Keyboard Shortcuts", "Product Velocity"],
    coreQuestion: "Why did engineering squads ditch Jira for Linear's opinionated workflow?",
    observations: [
      {
        aspect: "Zero-Latency Paradigm",
        detail: "By maintaining a local SQLite/IndexedDB client store, all actions (create, triage, status updates) occur in under 16ms with zero loading spinners. State mutations are flushed asynchronously."
      },
      {
        aspect: "Keyboard Ergonomics",
        detail: "Complete command palette (Cmd+K) and single-key shortcuts eliminate mouse navigation, transforming routine issue triage into an effortless muscle-memory reflex."
      },
      {
        aspect: "Strategic Constraint",
        detail: "Linear deliberately refuses complex multi-tier approval hierarchies, favoring autonomous, fast-paced product squads over enterprise bureaucracy."
      }
    ],
    pmRecommendation:
      "Develop customizable 'Stakeholder Portals' with automated executive summaries and milestone burndowns to satisfy executive reporting without cluttering the minimalist, distraction-free environment of core developers."
  },
  {
    id: "blinkit",
    product: "Quick-Commerce (Blinkit & Zepto)",
    category: "Hyperlocal Logistics & Dark Store Systems",
    headline: "Real-Time SKU Allocation & The Psychology of 10-Minute Fulfillment",
    tags: ["Inventory Routing", "Cart Locking", "Order Funnels", "Failure Recovery"],
    coreQuestion: "How do micro-warehouses manage real-time inventory locking without cart abandonment?",
    observations: [
      {
        aspect: "Inventory Contention",
        detail: "Holding physical stock upon adding to cart causes artificial stockouts from ghost carts. Conversely, locking stock only at payment leads to high 'Item Unavailable' errors at final checkout."
      },
      {
        aspect: "Picker Route Optimization",
        detail: "Dark store layouts mirror high-velocity category pairings. Automated packing routes minimize physical picker transit times to under 120 seconds per order."
      },
      {
        aspect: "Micro-Interaction Psychology",
        detail: "Live bag-packing progress bars and driver dispatch countdowns replace idle wait anxiety with perceived momentum, driving high post-purchase satisfaction."
      }
    ],
    pmRecommendation:
      "Deploy intelligent predictive auto-substitutions during checkout based on past user dietary preferences and price elasticity, slashing order abandonment caused by last-second stockouts."
  }
];

export default function ProductTeardowns() {
  const [selectedTeardown, setSelectedTeardown] = useState(teardowns[0].id);

  const active = teardowns.find((t) => t.id === selectedTeardown) || teardowns[0];

  return (
    <section className="section" id="teardowns">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionBadge}>Analysis &amp; Critique</span>
          <h2 className="section-title">Product Teardowns</h2>
          <p className="section-subtitle">
            Deconstructing software products: evaluating user experience friction, technical architectures, and strategic product trade-offs.
          </p>
        </div>

        <div className={styles.teardownLayout}>
          {/* Left: Teardown selector */}
          <div className={styles.sidebar}>
            {teardowns.map((item) => {
              const isSelected = item.id === selectedTeardown;
              return (
                <div
                  key={item.id}
                  className={`mono-card ${styles.selectorCard} ${isSelected ? styles.selectedCard : ""}`}
                  onClick={() => setSelectedTeardown(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedTeardown(item.id);
                    }
                  }}
                >
                  <div className={styles.productBadge}>
                    <span className={styles.dot} />
                    <span className={styles.productName}>{item.product}</span>
                  </div>
                  <h3 className={styles.selectorTitle}>{item.headline}</h3>
                  <span className={styles.selectorCategory}>{item.category}</span>
                </div>
              );
            })}

            <div className={`mono-card ${styles.upcomingCard}`}>
              <span className={styles.upcomingBadge}>Upcoming Analysis</span>
              <p className={styles.upcomingText}>
                Currently drafting teardowns on <strong>Arc Browser (Tab Architecture)</strong> and <strong>Vercel (Developer Feedback Loops)</strong>.
              </p>
            </div>
          </div>

          {/* Right: Teardown Detail view */}
          <div className={`mono-card ${styles.detailCard}`}>
            <div className={styles.detailHeader}>
              <div className={styles.headerMeta}>
                <span className={styles.activeProduct}>{active.product}</span>
                <span className={styles.categoryDivider}>/</span>
                <span className={styles.activeCat}>{active.category}</span>
              </div>
              <h3 className={styles.detailTitle}>{active.headline}</h3>

              <div className={styles.questionBox}>
                <span className={styles.questionLabel}>Core PM Question:</span>
                <p className={styles.questionText}>&ldquo;{active.coreQuestion}&rdquo;</p>
              </div>

              <div className={styles.tagsContainer}>
                {active.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.detailBody}>
              <h4 className={styles.subheading}>Architectural &amp; UX Observations</h4>
              <div className={styles.obsGrid}>
                {active.observations.map((obs) => (
                  <div key={obs.aspect} className={styles.obsCard}>
                    <h5 className={styles.obsAspect}>{obs.aspect}</h5>
                    <p className={styles.obsDetail}>{obs.detail}</p>
                  </div>
                ))}
              </div>

              <div className={styles.recommendationBox}>
                <h4 className={styles.recTitle}>My PM Recommendation</h4>
                <p className={styles.recText}>{active.pmRecommendation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
