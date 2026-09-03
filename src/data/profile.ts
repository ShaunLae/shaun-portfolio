import type { Profile } from "../types";

export const profile: Profile = {
  brand: "ShaunLaeWai",
  name: "Shaun Lae Wai",
  role: "Frontend Developer",
  location: "Subang Jaya, Selangor, Malaysia — open to MY & SG, remote or on-site",
  locationShort: "Subang Jaya, Selangor · open to MY & SG",
  email: "shaunlae13@gmail.com",
  linkedIn: "https://www.linkedin.com/in/shaun-lae-wai-b27755168/",
  github: "https://github.com/ShaunLae",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  heroEyebrow: "frontend developer · malaysia & singapore",
  heroHeadline: "Building interfaces from real user workflows, not just wireframes.",
  heroLede:
    "I'm Shaun Lae Wai — a frontend developer who's shipped CRM platforms and conversational AI tools used by 1,000+ people across three countries, now deepening into React, TypeScript and Next.js.",
  heroPrimaryCta: { label: "View my projects", href: "#projects" },
  heroSecondaryCta: { label: "Get in touch", href: "#contact" },
  stats: [
    { value: "2+", label: "years shipping product" },
    { value: "3", label: "countries reached" },
    { value: "1000+", label: "end users served" },
  ],
  stackPills: ["React", "TypeScript", "Redux", "Tailwind", "Next.js", "Shadcn/ui"],
  aboutEyebrow: "How I got from conversational AI to component architecture.",
  aboutParagraphs: [
    [
      { text: "I started my career building " },
      { text: "conversational AI chatbots", strong: true },
      {
        text: " — Manychat and Dialogflow flows that helped entrepreneurs across Myanmar, Thailand and beyond get support without waiting on a human. That work taught me to think about interfaces as conversations: what does the person need next, and how do you get out of their way.",
      },
    ],
    [
      { text: "That thinking carried into my current role at " },
      { text: "ONOW Enable", strong: true },
      {
        text: ", where I design and build the frontend architecture for a CRM platform — scalable UI, real-time API sync, and workflows that a non-technical support team can actually use.",
      },
    ],
    [
      { text: "I'm now formalising that experience with a " },
      { text: "First Class Honours degree in Computing", strong: true },
      {
        text: " and hands-on coursework in React, TypeScript and Next.js, so I can bring the same product instincts to modern component-based frontends.",
      },
    ],
  ],
  aboutTimeline: [
    {
      year: "2024–now",
      title: "Frontend Developer",
      detail: "ONOW Enable — CRM platform architecture",
    },
    {
      year: "2022–24",
      title: "Chatbot Developer",
      detail: "ONOW Myanmar — conversational AI, 3 countries",
    },
    {
      year: "2025–26",
      title: "BSc Computing (1st Class)",
      detail: "University of Greenwich",
    },
    {
      year: "now",
      title: "React & TypeScript",
      detail: "MT Coding — active coursework",
    },
  ],
  skillsEyebrow: "Grouped by how I actually use them, not just listed as tags.",
  skillGroups: [
    {
      title: "Core frontend",
      items: ["HTML, CSS, JavaScript (ES6+)", "Tailwind CSS", "Responsive & accessible UI"],
    },
    {
      title: "React ecosystem",
      items: ["ReactJS & Redux", "TypeScript", "Next.js (fundamentals)", "Shadcn/ui, Material UI"],
    },
    {
      title: "Backend & data",
      items: ["Java, PHP", "MySQL, PostgreSQL", "REST API integration"],
    },
    {
      title: "Tools & platforms",
      items: ["Git, GitHub, NPM", "Bubble.io (low-code)", "Manychat, Dialogflow"],
    },
  ],
  projectsEyebrow: "Three projects that show how I think, not just what I typed.",
  projects: [
    {
      number: "01",
      tag: "react · typescript · tailwind",
      title: "This portfolio site",
      role: "Solo design & build — React course capstone",
      description:
        "Designed and built from scratch as the capstone project for my React/TypeScript coursework: a glassmorphism-styled site with a custom design system, built to load fast and read clearly to recruiters scanning on mobile between meetings.",
      meta: ["React", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/ShaunLae/shaun-portfolio",
    },
    {
      number: "02",
      tag: "bubble.io · rest api",
      title: "Enable CRM Platform",
      role: "Frontend architecture — ONOW Enable",
      description:
        "Designed the frontend architecture for a CRM used daily by a support team: real-time REST API sync with backend databases, custom JavaScript workflows for dynamic data rendering, and version-release documentation that helped the platform ship reliably each sprint. Promoted to the core production team within 7 months.",
      meta: ["UI/UX architecture", "API integration", "Agile/Scrum"],
    },
    {
      number: "03",
      tag: "manychat · dialogflow",
      title: "Conversational AI chatbot suite",
      role: "Chatbot developer — ONOW Myanmar",
      description:
        "Engineered and deployed 3 automated chatbots on Manychat and Dialogflow, reaching over 1,000 entrepreneurs across three countries. Handled complex JSON payloads for API communication and used interaction data to continuously retrain conversational flows and fix friction points.",
      meta: ["NLP flows", "JSON/API", "PostgreSQL / MySQL"],
    },
  ],
  experienceEyebrow: "Full role history, in brief.",
  experience: [
    {
      dates: "Jun 2024 — Present",
      title: "Frontend Developer",
      company: "ONOW Enable · United States (Remote)",
      bullets: [
        "Designed and implemented frontend architecture for a CRM platform, focusing on scalable UI/UX and workflow design.",
        "Integrated RESTful API connectors bridging frontend interfaces with backend databases for real-time sync.",
        "Built custom JavaScript logic for dynamic data rendering, state management, and complex interactions.",
        "Promoted to the core production team within 7 months for consistent delivery and documentation quality.",
      ],
    },
    {
      dates: "May 2022 — May 2024",
      title: "Junior Chatbot Developer",
      company: "ONOW Myanmar · Yangon",
      bullets: [
        "Engineered and deployed 3 conversational chatbots on Manychat and Dialogflow, reaching 1,000+ entrepreneurs across 3 countries.",
        "Handled complex JSON payloads for seamless API communication.",
        "Managed PostgreSQL and MySQL database operations via Azure Data Studio for extraction and reporting.",
      ],
    },
  ],
  education: [
    {
      year: "2025 — 2026",
      title: "BSc Computing, First Class Honours",
      detail: "University of Greenwich, London",
    },
    {
      year: "2017 — 2020",
      title: "Computer Science (Undergraduate)",
      detail: "University of Computer Studies, Yangon",
    },
    {
      year: "Apr 2026 — Present",
      title: "React & TypeScript Coursework",
      detail: "MT Coding, Online",
    },
  ],
  contactHeadline: "Let's build something together.",
  contactBody:
    "Based in Subang Jaya, Selangor — open to frontend roles across Malaysia and Singapore, remote or on-site.",
  contactLinks: [
    {
      label: "Email",
      href: "mailto:shaunlae13@gmail.com",
      hint: "shaunlae13@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shaun-lae-wai-bella-b27755168/",
      hint: "/shaun-lae-wai",
    },
    {
      label: "GitHub",
      href: "https://github.com/ShaunLae",
      hint: "/ShaunLae",
    },
  ],
  footer: "Designed & built by Shaun Lae Wai.",
  avatarSrc: "/profile.jpg",
  avatarAlt: "Portrait of Shaun Lae Wai",
};
