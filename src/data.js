// Central content source for the portfolio — edit here to update the whole site.

export const profile = {
  name: "Danish Malik",
  role: "Full Stack Java Developer · Backend Engineer",
  tagline: "I design and scale backend systems that move money, data and people.",
  blurb:
    "Full Stack Java Developer with 3.5+ years building and scaling backend systems and end-to-end web apps for fintech, lending and SaaS platforms.",
  location: "Noida, Delhi NCR · India",
  email: "danishmalik.ai97@gmail.com",
  phone: "+91 8869060519",
  resume: "Danish(Backend_Engineer).pdf", // file lives in src/resources
  socials: {
    github: "https://github.com/Danishmalikk",
    linkedin: "https://www.linkedin.com/in/danishmalikk/",
    twitter: "https://twitter.com/DanishMalik0802",
    leetcode: "https://leetcode.com/u/danishahmed888/",
  },
};

export const stats = [
  { value: "3.5+", label: "Years of experience" },
  { value: "8+", label: "Microservices architected" },
  { value: "10s → 2.5ms", label: "API latency cut" },
  { value: "60–70%", label: "Manual effort reduced" },
];

export const about = [
  "I'm a backend-focused Full Stack Java Developer based in Noida,UP. Over the last 3.5+ years I've designed service-oriented systems and shipped production features across customer onboarding, KYC, underwriting and loan processing for fintech and lending platforms.",
  "My core is Java, Spring Boot, REST APIs and microservices, backed by hands-on Node.js, NestJS, React and PostgreSQL. I care about performance (I've cut API response times from ~5s to 10ms), automation that removes 60–70% of manual work, and clean, observable systems.",
  "I've also led small engineering teams — owning architecture decisions, code reviews and delivery across the full SDLC, from requirements to deployment and monitoring.",
];

// Short journey milestones for the About timeline
export const journey = [
  { year: "2019", text: "B.Tech in Computer Science — where the fascination with building for the web began." },
  { year: "2023", text: "Started as an Associate Developer shipping full-stack features, auth & MFA on production platforms." },
  { year: "2024", text: "Moved deeper into fintech — APIs, caching and monolith-to-microservices migration." },
  { year: "2025", text: "Leading backend architecture for lending & debt-collection systems at scale." },
];

export const skills = [
  {
    group: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    group: "Backend & Frameworks",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Microservices",
      "Node.js",
      "NestJS",
      "Express.js",
      "GraphQL",
      "Event-Driven Arch",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Redux", "Next.js", "TanStack Query", "Tailwind CSS", "Material UI"],
  },
  {
    group: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Query Optimization", "Indexing"],
  },
  {
    group: "Messaging & Async",
    items: ["Apache Kafka", "BullMQ", "Webhooks", "Job Queues"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda, CloudFront, Amplify)", "Docker", "Nginx", "GitHub Actions", "CI/CD", "Cloudflare"],
  },
  {
    group: "Security & Auth",
    items: ["JWT", "OAuth2", "AuthN / AuthZ", "MFA"],
  },
  {
    group: "AI & Automation",
    items: ["OpenAI", "LangChain", "LangGraph", "RAG Workflows", "FastAPI", "Puppeteer"],
  },
];

export const experience = [
  {
    role: "Backend Engineer",
    company: "e-Solve Group",
    domain: "Fintech · Debt Collection",
    period: "Nov 2025 — Present",
    current: true,
    highlights: [
      "Led a cross-functional backend and frontend team, owning architecture decisions and code reviews across fintech and debt-collection platforms.",
      "Designed a distributed backend where a Java Spring Boot background-verification microservice integrates with a NestJS loan-servicing core over REST + webhooks, backed by PostgreSQL and secured with a shared JWT; containerized with Docker and deployed on AWS EC2 (services) and AWS Amplify (web).",
      "Delivered Tejas Field Force — a debt-collection system serving 1000+ field agents that replaced manual WhatsApp operations and reduced manual effort by 60–70%.",
      "Consolidated collections, portfolio monitoring and reporting into a centralized admin dashboard, giving managers a single view across 10+ key metrics.",
      "Launched real-time field tracking (attendance, live location, visit history, collections, payouts) that raised visibility for 100+ agents.",
      "Automated MIS and portfolio reporting, cutting prep time by nearly 50% (hours to under 10 minutes), and added audit logs that eliminated data-manipulation incidents.",
      "Developed multilingual AI voice-bot campaigns that process thousands of customer records and trigger automated outbound calls, scaling outreach 10x beyond manual capacity.",
      "Partnered with client teams and product owners across 15+ weekly syncs to align metric definitions and sustain reporting accuracy above 98%.",
      "Built a bulk-upload module backed by background jobs (BullMQ) that asynchronously processes thousands of task records per upload, preventing request timeouts and keeping the UI responsive.",
      "Integrated an external geocoding API within the upload module to derive latitude/longitude from task-file addresses, persisting results via batched DB updates to reduce database round-trips.",
    ],
    stack: ["Java", "Spring Boot", "NestJS", "PostgreSQL", "Webhooks", "JWT", "Docker", "AWS", "BullMQ"],
  },
  {
    role: "Software Developer",
    company: "Innow8 Apps",
    domain: "IT Services · Fintech",
    period: "Sep 2024 — Jul 2025",
    highlights: [
      "Designed APIs and microservices with Java Spring Boot, Node.js, NestJS, MongoDB and Python for 2 fintech clients (Nisa Finance, Immi Book).",
      "Cut homepage API response time from 15s to 6ms via a Redis + in-memory caching layer, and lifted overall app performance ~30%.",
      "Built lending modules for KYC verification, loan processing, transactions and financial verification.",
      "Streamlined underwriting with secure Puppeteer-based banking data-extraction bots for 2 banks (FNB, Standard Bank).",
      "Migrated the backend from a legacy monolith to a scalable service-oriented architecture.",
      "Built 15+ reusable React components & dashboards, lifting frontend load performance ~25% via lazy loading, memoization and code splitting.",
    ],
    stack: ["Java", "Spring Boot", "Node.js", "NestJS", "MongoDB", "Redis", "React", "AWS"],
  },
  {
    role: "Associate Software Developer",
    company: "BEGAWN IT Pvt. Ltd.",
    domain: "E-commerce · Enterprise",
    period: "Jan 2023 — Aug 2024",
    highlights: [
      "Delivered full-stack features for production e-commerce & enterprise platforms (Seal360, TCSK) — backend APIs, auth and admin panels.",
      "Implemented AuthN, AuthZ and Multi-Factor Authentication on a JWT-based security architecture.",
      "Integrated 20+ REST endpoints (GET/POST/PUT/DELETE) across contracts and core business modules.",
      "Hardened data integrity with input validation and app-level security using Yup and Crypto.",
      "Created user-activity, application and error-logging systems that cut issue-resolution time by 20%.",
      "Shipped communication modules — WhatsApp broadcasting (Plivo), SMS and bulk push notifications (Firebase Admin SDK).",
    ],
    stack: ["Node.js", "JWT", "MFA", "REST APIs", "Firebase", "Plivo"],
  },
];

// Real, measurable wins pulled from the resume — the "achievements" story.
export const impact = [
  {
    metric: "10s → 2.5ms",
    title: "API performance",
    detail: "Cut response times by orders of magnitude with Redis + in-memory caching and query optimization.",
  },
  {
    metric: "60–70%",
    title: "Manual effort removed",
    detail: "Replaced manual WhatsApp-based debt-collection ops with an automated field-force system for 1000+ agents.",
  },
  {
    metric: "10x",
    title: "Outreach scaled",
    detail: "Multilingual AI voice-bot campaigns that trigger automated outbound calls far beyond manual capacity.",
  },
  {
    metric: "8+",
    title: "Microservices architected",
    detail: "Designed and deployed distributed services with Spring Boot, NestJS, PostgreSQL and Docker on AWS.",
  },
  {
    metric: "~50%",
    title: "Reporting time saved",
    detail: "Automated MIS & portfolio reporting from hours down to under 10 minutes, with tamper-proof audit logs.",
  },
  {
    metric: "Team lead",
    title: "Engineering leadership",
    detail: "Led a cross-functional team, owning architecture, code reviews and delivery across the full SDLC.",
  },
];

export const education = {
  degree: "B.Tech — Computer Science Engineering",
  school: "Glocal University",
  period: "2015 — 2019",
  detail: "Foundations in data structures, algorithms, databases and software engineering.",
};

export const projects = [
  {
    name: "Veer Fitness",
    tag: "Frontend · Live",
    problem:
      "Independent personal trainers need a professional online presence where prospective clients can explore training programs, see real transformation results, and book a session without friction.",
    solution:
      "A personal-trainer marketing & booking site with GSAP-driven animated sections, a full services lineup (personal training, group classes, yoga, online coaching, nutrition plans, fitness assessments), a client-transformation & testimonial gallery, and a booking form that routes leads straight to the trainer's WhatsApp for instant session scheduling.",
    role: "Solo front-end developer — component architecture, animations and responsive layout.",
    stack: ["React", "React Router", "Material UI", "GSAP", "Tailwind CSS"],
    link: "https://personal-trainer-veer-fitness-j3wv.vercel.app/",
    repo: "https://github.com/Danishmalikk",
    image: "VeerFitness.png",
  },
  {
    name: "Pizza-Sizza",
    tag: "Full-Stack · Live",
    problem: "Online food ordering is often clunky, with cluttered menus and no visibility into order status.",
    solution:
      "A category-driven pizza & burger ordering app with live order-status tracking and a clean, responsive interface focused on UX.",
    role: "Solo full-stack developer — component architecture, routing and responsive UI.",
    stack: ["JavaScript", "React", "Next.js", "Material UI", "Tailwind CSS"],
    link: "https://pizza-sizza-delivery-app.vercel.app/",
    repo: "https://github.com/Danishmalikk",
    image: "Pizza-sizza.png",
  },
  {
    name: "Ocean Evoke",
    tag: "Full-Stack · Live",
    problem:
      "Ocean-conservation-minded shoppers had no lifestyle brand that paired sustainable, ocean-inspired products with real diving expertise and transparent conservation impact.",
    solution:
      "India's first ocean-conservation social enterprise storefront — shop collections (towels, unisex apparel, underwater photography prints) alongside dive-training, dive-travel and sustainability-consulting services, with Google sign-in, cart/wishlist/checkout, an 'Evoke Tribe' rewards program, and a public impact & conservation blog where 1% of every purchase funds ocean-conservation efforts.",
    role: "Full-stack developer — storefront, authentication, cart/checkout flow and content pages.",
    stack: ["React", "React Router", "Tailwind CSS", "Vite", "Google OAuth", "Axios"],
    link: "https://oceanevoke.com/",
    repo: "https://github.com/Danishmalikk",
    image: "OceanEvoke.png",
  },
];

export const navLinks = [
  { title: "Home", url: "home" },
  { title: "About", url: "about" },
  { title: "Skills", url: "skills" },
  { title: "Experience", url: "experience" },
  { title: "Impact", url: "impact" },
  { title: "Projects", url: "projects" },
  { title: "Contact", url: "contact" },
];
