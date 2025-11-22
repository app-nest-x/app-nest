export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  readTime: number;
  topics: string[];
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "engineering-blazing-fast-nextjs-ui",
    title: "Engineering a Blazing‑Fast Next.js UI",
    subtitle: "Patterns for sub‑100ms interactions and stable frame times",
    date: "2025-01-12",
    category: "Engineering",
    readTime: 8,
    topics: ["Next.js", "Performance", "React"],
    content: [
      "Speed is not a single feature. It is the result of removing variance across the entire rendering pipeline.",
      "We lean on Suspense for concurrent rendering, keep component trees flat, and avoid cascading re‑renders.",
      "Most wins come from memoizing expensive selectors and lifting state into dedicated stores when necessary.",
      "Networking is aggressively batched, and UI responds optimistically with background validation.",
    ],
  },
  {
    slug: "designing-for-60fps-micro-interactions",
    title: "Designing for 60fps: Micro‑interactions That Matter",
    subtitle: "How subtle motion turns utility into delight without noise",
    date: "2025-01-16",
    category: "Design",
    readTime: 7,
    topics: ["Motion", "UX", "Micro‑interactions"],
    content: [
      "Motion must carry information. Every animation we ship has a job and a time budget.",
      "We treat 150ms as a hard ceiling for most transitions and avoid easing curves that feel rubbery.",
      "Hover states communicate affordance, not decoration. Feedback is subtle and consistent across components.",
    ],
  },
  {
    slug: "shipping-ai-agents-responsibly",
    title: "Shipping AI Agents Responsibly",
    subtitle: "Guardrails, traceability, and human control in production",
    date: "2025-01-20",
    category: "AI/ML",
    readTime: 9,
    topics: ["LLMs", "Guardrails", "Observability"],
    content: [
      "Agents are tools, not teammates. We design them with narrow scopes and clear exits.",
      "Structured outputs, deterministic planners, and policy layers keep actions safe and reviewable.",
      "We log every step and attach context so failures are explainable and fixable without guesswork.",
    ],
  },
  {
    slug: "pragmatic-modularization-monolith-to-services",
    title: "Pragmatic Modularization: From Monolith to Services",
    subtitle: "A migration strategy that avoids flag days and rewrites",
    date: "2025-01-24",
    category: "Architecture",
    readTime: 8,
    topics: ["Architecture", "Services", "Refactoring"],
    content: [
      "We carve seams where ownership is clear and cross‑cutting concerns are minimal.",
      "Modules graduate to services only when isolation delivers measurable value: speed, safety, or autonomy.",
      "Interfaces are versioned and contracts tested. Data evolution is staged behind adapters.",
    ],
  },
  {
    slug: "operational-excellence-error-budgets-and-slos",
    title: "Operational Excellence: Error Budgets and SLOs",
    subtitle: "Balancing delivery velocity with reliability",
    date: "2025-01-28",
    category: "Operations",
    readTime: 6,
    topics: ["SRE", "SLOs", "Monitoring"],
    content: [
      "Error budgets quantify risk. They make tradeoffs explicit and aligned to business priorities.",
      "We instrument user journeys, not servers, and escalate on impact rather than noise.",
      "Incident practice is a feature. We rehearse, learn, and ship improvements directly into the workflow.",
    ],
  },
];