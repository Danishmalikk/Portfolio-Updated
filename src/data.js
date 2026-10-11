// Central content source for the portfolio — edit here to update the whole site.

export const profile = {
  name: "Danish Malik",
  role: "Java Full Stack Developer · Backend Engineer",
  tagline: "I design and scale backend systems that move money, data and people.",
  blurb:
    "Java Backend Engineer with 4 years designing and scaling backend systems and end-to-end web apps for fintech, lending and SaaS platforms.",
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
  { value: "4+", label: "Years of experience" },
  { value: "3000+", label: "Field agents served" },
  { value: "15s → 50ms", label: "API latency cut" },
  { value: "60–70%", label: "Manual effort reduced" },
];

export const about = [
  "I'm a backend-focused Java Full Stack Developer based in Noida, UP. Over the last 4 years I've designed service-oriented systems and shipped production features across customer onboarding, KYC, underwriting and loan processing for fintech, lending and SaaS platforms.",
  "My core is Java, Spring Boot, REST APIs and microservices, backed by hands-on Node.js, NestJS, React and PostgreSQL. I care about performance (I've cut an API from 15 seconds to 50 ms), automation that removes 60–70% of manual work, and clean, observable systems.",
  "I've also led a cross-functional engineering team — owning architecture decisions, code reviews and delivery across the full SDLC, from business requirements to deployment and monitoring in production.",
];

// Short journey milestones for the About timeline
export const journey = [
  { year: "2019", text: "B.Tech in Computer Science — where the fascination with building for the web began." },
  { year: "2022", text: "Newton School — intensive DSA & full-stack program in Java, JavaScript, React and Node.js." },
  { year: "2023", text: "Started as an Associate Developer shipping React UIs and communication modules at scale." },
  { year: "2024", text: "Moved into fintech — Spring Boot lending modules, caching and a Strapi v3 migration for an SME lender." },
  { year: "2025", text: "Leading backend architecture for lending & debt-collection platforms serving 3000+ agents." },
];

export const skills = [
  {
    group: "Languages",
    items: ["Java 8 / 17 / 21", "JavaScript", "TypeScript", "SQL", "Python"],
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
      "Maven",
      "Frappe",
      "Strapi",
    ],
  },
  {
    group: "Frontend",
    items: ["React.js", "Redux", "Next.js", "TanStack Query", "React Native", "Tailwind CSS", "Material UI"],
  },
  {
    group: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Query Optimization", "Database Design", "Indexing"],
  },
  {
    group: "Messaging & Async",
    items: ["Apache Kafka", "BullMQ", "Webhooks", "Job Queues"],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, CloudFront, Amplify, VPC, CloudWatch)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
      "Cloudflare",
      "Grafana",
    ],
  },
  {
    group: "Security & Auth",
    items: ["Spring Security", "JWT", "OAuth2", "AuthN / AuthZ", "MFA"],
  },
  {
    group: "AI & Automation",
    items: ["OpenAI", "LangChain", "LangGraph", "RAG Workflows", "FastAPI", "Puppeteer", "LLM Integrations"],
  },
  {
    group: "Fintech Integrations",
    items: ["CKYC (CERSAI)", "Decentro", "TransUnion CIBIL", "Experian", "Razorpay", "DLT SMS"],
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
      "Led a cross-functional backend and frontend team, owning architecture decisions and code reviews across fintech lending and debt-collection platforms.",
      "Designed a distributed backend where a Spring Boot background-verification microservice talks to a NestJS loan-servicing core over REST and webhooks with shared JWT auth — both on PostgreSQL, containerized with Docker and deployed on AWS EC2 and Amplify.",
      "Built Tejas Field Force from scratch — a debt-collection platform and React Native app serving 3000+ field agents (attendance, case allocation, GPS-tagged visits, collections, payouts) that replaced manual WhatsApp operations and cut manual effort by 60–70%.",
      "Built the CKYC service for RinnCrest, a digital lending platform, fetching and validating customer KYC records from the Central KYC Registry (CERSAI) during loan onboarding to remove repeated document collection.",
      "Integrated third-party fintech APIs across the loan lifecycle — Decentro (KYC/bank verification), TransUnion CIBIL & Experian (credit bureau checks), Razorpay (disbursements & repayments) and DLT-compliant SMS — connected to a Frappe-based back-office admin.",
      "Built a centralized admin dashboard tracking 40+ collection and portfolio metrics; automated MIS reporting cut prep time from hours to under 10 minutes (~80%), and audit logs eliminated data-manipulation incidents.",
      "Developed multilingual AI voice-bot campaigns that trigger automated outbound calls across thousands of customer records, scaling outreach 10x beyond manual capacity.",
      "Built a BullMQ-backed bulk-upload pipeline that processes thousands of task records asynchronously, geocoding addresses via an external API and batching DB writes to avoid timeouts.",
      "Optimized NestJS/PostgreSQL APIs — removed N+1 queries, added targeted indexes and Redis caching, cursor pagination and TypeORM relation tuning — reducing p95 latency by 40%.",
    ],
    stack: ["Java", "Spring Boot", "NestJS", "PostgreSQL", "Redis", "BullMQ", "React Native", "Frappe", "Docker", "AWS"],
  },
  {
    role: "Software Developer",
    company: "Innow8 Apps",
    domain: "IT Services · Fintech",
    period: "Sep 2024 — Jul 2025",
    highlights: [
      "Developed backend services in Java Spring Boot and NestJS for Nisa Finance, a South African SME lending marketplace connecting businesses with finance providers, delivering client-requested features to its SME and finance-provider portals.",
      "Built Spring Boot lending modules for invoice discounting and purchase-order finance — KYC and director verification, application processing, transaction and repayment management — supporting a fully online flow with credit decisions in 2 business days.",
      "Cut homepage API response time from 15 seconds to 50 ms with a Redis and in-memory caching layer; query optimization and a CDN on CloudFront and Cloudflare improved overall performance by 30%.",
      "Streamlined SME underwriting with secure Puppeteer-based scraping bots that extract bank-statement data from FNB and Standard Bank, replacing manual statement review.",
      "Migrated the full backend from Zen API to Strapi v3 — data models, APIs and business logic — with no disruption to live lending operations.",
      "Acted as the primary technical contact for the client: gathered requirements, scoped feature requests and managed delivery timelines.",
      "Built 15+ reusable React.js components and dashboards, improving frontend load performance by ~25% through lazy loading, memoization and code splitting.",
    ],
    stack: ["Java", "Spring Boot", "NestJS", "Strapi", "Redis", "Puppeteer", "React", "AWS", "Cloudflare"],
  },
  {
    role: "React Developer",
    company: "Alpha Technologies Inc.",
    domain: "E-commerce · Enterprise",
    period: "Feb 2024 — May 2024",
    highlights: [
      "Delivered full-stack features for production e-commerce and enterprise platforms (Seal360, TCSK), spanning backend APIs, authentication and admin panels.",
      "Implemented authentication, authorization and Multi-Factor Authentication (MFA) on a JWT-based security architecture.",
      "Integrated 20+ REST API endpoints (GET, POST, PUT, DELETE) across contracts and core business modules.",
      "Strengthened data integrity with input validation and application-level security using Yup and Crypto libraries.",
    ],
    stack: ["React", "JWT", "MFA", "REST APIs", "Yup"],
  },
  {
    role: "Associate Software Developer",
    company: "BEGAWN IT Pvt. Ltd.",
    domain: "Web Apps · Communications",
    period: "Jan 2023 — Feb 2024",
    highlights: [
      "Developed and enhanced user interfaces with React.js, Tailwind CSS and Material UI, managing state with Redux Toolkit.",
      "Implemented layouts, reusable components and interactive features like modals, charts and dynamic tables.",
      "Optimized React components with memoization, lazy loading and code splitting, improving rendering speed by 30% with WCAG accessibility compliance.",
      "Shipped communication modules — WhatsApp broadcasting via Plivo, SMS and bulk push notifications via Firebase Admin SDK — reaching thousands of users per campaign.",
    ],
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Material UI", "Firebase", "Plivo"],
  },
  {
    role: "Software Engineer Intern",
    company: "Newton School",
    domain: "Bengaluru · Training",
    period: "Jun 2022 — Nov 2022",
    highlights: [
      "Completed an intensive program in data structures & algorithms and full-stack development (Java, JavaScript, React, Node.js), shipping multiple full-stack projects that applied core CS fundamentals to real engineering problems.",
    ],
    stack: ["Java", "DSA", "JavaScript", "React", "Node.js"],
  },
];

// Real, measurable wins pulled from the resume — the "achievements" story.
export const impact = [
  {
    metric: "15s → 50ms",
    title: "API performance",
    detail: "Cut a homepage API from 15 seconds to 50 ms with a Redis + in-memory caching layer for an SME lending platform.",
  },
  {
    metric: "60–70%",
    title: "Manual effort removed",
    detail: "Replaced manual WhatsApp-based debt-collection ops with Tejas Field Force, serving 3000+ field agents.",
  },
  {
    metric: "10x",
    title: "Outreach scaled",
    detail: "Multilingual AI voice-bot campaigns that trigger automated outbound calls far beyond manual capacity.",
  },
  {
    metric: "40%",
    title: "Lower p95 latency",
    detail: "Removed N+1 queries, added targeted indexes, Redis caching and cursor pagination across NestJS/PostgreSQL APIs.",
  },
  {
    metric: "~80%",
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
