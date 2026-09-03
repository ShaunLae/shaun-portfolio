---
name: shaun-portfolio-build
description: Build and maintain Shaun Lae Wai's personal frontend developer portfolio — a React + Vite + TypeScript site with a white-mode glassmorphism design in an olive palette, targeting job applications in Singapore and Malaysia. Use this whenever working on the portfolio project: scaffolding it, adding sections/pages, styling components, adding projects, or deploying it.
---

# Shaun Lae Wai — Frontend Developer Portfolio

## 1. Project Goal

A quality-focused personal portfolio built as a real coded project (not low-code) to
demonstrate hands-on React/TypeScript ability to recruiters in **Singapore and Malaysia**.
Shaun's professional experience is strong but mostly on low-code/no-code platforms
(Bubble.io, Manychat, Dialogflow) — this portfolio's own build quality, plus 2–3 small
embedded demo projects, are what prove she can write real frontend code. Treat code
quality, accessibility, and polish as more important than feature count.

## 2. Tech Stack (must use — matches what Shaun just completed in her React course)

- **Build tool:** Vite
- **Framework:** React 18+ with TypeScript (strict mode on)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui (button, card, badge, tabs, dialog, sheet/drawer for mobile nav)
- **State:** React state/context by default; use Redux Toolkit for ONE deliberate feature
  (e.g. a project-filter or theme store) so it shows in the codebase without being forced
  everywhere
- **Routing:** React Router (single-page sections are fine, but use routes for
  `/`, `/projects`, `/projects/:slug`, `/contact` so there's real routing to point to)
- **Animation (optional, nice-to-have):** Framer Motion for card hover/entrance transitions
- **Icons:** lucide-react
- **Deployment target:** Vercel or Netlify (static build, no backend required)
- Do NOT introduce Next.js for this project — Shaun listed Next.js as "basic" only;
  keep this a Vite SPA so the stack matches her stated skill level honestly.

## 3. Design System — "Olive Glass, White Mode"

Glassmorphism reads best as translucent frosted panels floating on a light, warm
background — NOT olive-on-olive. Use olive as the accent/interactive color, not the
page background.

### Color palette (Tailwind config values)

| Token | Hex | Use |
|---|---|---|
| `background` | `#FAFAF7` | page background (warm off-white) |
| `surface` | `#FFFFFF` | opaque card fallback / nav bar |
| `glass` | `rgba(255,255,255,0.55)` | glass panel fill |
| `glass-border` | `rgba(255,255,255,0.35)` | glass panel border |
| `olive-50` | `#F3F5EC` | subtle tinted backgrounds, hover states |
| `olive-200` | `#D3DCB8` | soft accents, tags |
| `olive-400` | `#A8B78A` | secondary accent, icons |
| `olive-600` | `#7C8B5C` | primary accent — buttons, links, active states |
| `olive-800` | `#4A5A34` | headings accent, dark accent text |
| `ink` | `#2E3524` | primary body/heading text (dark olive-black, not pure black) |
| `ink-muted` | `#6B7263` | secondary text |

### Glassmorphism spec (apply consistently across cards/nav/modals)

```css
.glass-panel {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1.25rem; /* rounded-2xl */
  box-shadow: 0 8px 32px rgba(124, 139, 92, 0.12); /* olive-tinted shadow, not black */
}
```

- Always place glass panels over a background with some visual interest (a soft olive
  gradient blob, subtle noise texture, or blurred geometric shape) — glass on flat white
  looks like nothing. Add 2–3 large soft-blurred olive-toned circles/blobs positioned
  behind content with `blur-3xl` and low opacity as the backdrop.
- Buttons: solid `olive-600` fill with white text for primary CTAs; glass-style
  (translucent + olive-600 border/text) for secondary actions.
- Keep body text on `ink`, never on pure white glass without sufficient contrast —
  test contrast, especially on the blob backgrounds.

### Typography

- Headings: a clean geometric sans (Inter, or a slightly more distinctive option like
  "Sora" or "Plus Jakarta Sans" from Google Fonts) — weight 600–700
- Body: Inter, weight 400–500
- Keep generous line-height and whitespace; glassmorphism looks cheap when cramped

## 4. Site Structure & Content

Use Shaun's actual CV content below — do not invent employers or dates, but you may
lightly rephrase for portfolio tone.

### Hero
- "Shaun Lae Wai" / "Frontend Developer"
- One-liner: building user-centric web apps and AI-driven chatbots, currently deepening
  React expertise, open to remote/SG/MY roles
- CTAs: "View Projects", "Download Resume" (link a PDF export), social icons
  (LinkedIn: https://www.linkedin.com/in/shaun-lae-wai-b27755168/,
  GitHub: https://github.com/ShaunLae)

### About
Short narrative: Myanmar-based frontend/chatbot developer → First Class Honours,
Bachelor of Computing, University of Greenwich (Jun 2025–Apr 2026) → currently expanding
into modern React/TypeScript. Mention languages: Burmese (native), English
(intermediate), Mandarin (HSK2 learning) — a plus for SG/MY multilingual teams.

### Skills (group exactly as CV, render as tag/badge groups per category)
- Frontend: HTML, CSS, JavaScript, Tailwind, ReactJS, Redux, JSON, **TypeScript**,
  **Shadcn/ui**, **Material UI**, **Next.js (basic)** — add these last four since she
  just completed them, clearly labeled if still "learning/basic"
- Backend: Java, PHP
- Database: MySQL, PostgreSQL
- Platforms: Manychat, Dialogflow (Conversational AI), Bubble.io
- Tools: Generative AI tools, Git/GitHub, Vite

### Experience (timeline component, most recent first)
1. **Frontend Developer — ONOW Enable, United States** (Jun 2024–Present)
   Frontend architecture for a CRM platform on Bubble.io; RESTful API integration;
   custom JS workflows for dynamic data/state; Agile/Scrum delivery; promoted to core
   production team within 7 months. Projects: Enable CRM Platform, Aggregate Dashboards.
2. **Junior Chatbot Developer — ONOW Myanmar, Yangon** (May 2022–May 2024)
   Built 3 chatbots (Manychat + Dialogflow/NLP) reaching 1000+ entrepreneurs across
   3 countries; JSON payload handling; PostgreSQL/MySQL via Azure Data Studio; API
   integrations. Projects: ONOW Myanmar Sont Oo, ONOW DAI Thailand, ILAD Business
   Development Center, Ngwe Oo Yin Chatbot.
3. Optionally include Event & Trip Organizer Intern (Moment, Yangon) briefly or fold
   into About as a soft-skills note — it's not technical, keep it short if included.

### Projects (**build these — this is the credibility section**)
Since the CV has no hand-coded personal projects, scaffold 2–3 small real demo apps,
each with its own route/page, live in the SPA, with a link to its own GitHub repo folder:

1. **CRM Dashboard Concept** — a small React+TS+Tailwind rebuild of a CRM-style
   dashboard (cards, tables, a chart via `recharts`) echoing the Enable CRM work, but
   as genuinely coded UI instead of Bubble.io — this is the single most important
   project for countering the "low-code only" read.
2. **Chatbot Flow Visualizer** — a simple node/flow diagram UI (drag-free, static or
   lightly interactive) representing a Dialogflow-style conversation flow, nodding to
   her Manychat/Dialogflow background.
3. **(Optional) Redux-powered project filter or theme system** — small enough to be a
   feature of the portfolio itself rather than a separate project; this is where Redux
   Toolkit usage should live if you want it demonstrated.

Each project card (glass panel) needs: title, 1–2 line description, tech-tag badges,
GitHub link, live demo link if deployed.

### Education
- First Class Honours, BSc Computing — University of Greenwich (Jun 2025–Apr 2026),
  mention Final Year Project (OKR Management System), M-Hike mobile app, HCI, and
  requirements-management coursework
- University of Computer Studies Yangon (Dec 2017–Mar 2020)
- ReactJS coursework — MT Coding (Apr 2026–Present) — this course is the origin of
  this very portfolio project; can be mentioned in About

### Contact
- Email: shaunlae13@gmail.com, phone (optional — consider omitting public phone
  number on a public site, offer a contact form instead), LinkedIn, GitHub

## 5. SG/MY Job-Market Specifics

- Add an `alt`/meta description and page `<title>` optimized for "Frontend Developer
  Singapore Malaysia" style search/ATS scanning.
- Keep a downloadable PDF resume link (not just the on-page version) — many SG/MY
  recruiters still want a PDF.
- Mention work-authorization/visa status neutrally if relevant (e.g. "open to relocate
  to Singapore/Malaysia" or actual current status) — ask Shaun for the right phrasing
  before publishing rather than guessing.
- Keep the whole site mobile-first and fast (Lighthouse 90+) — many recruiters browse
  portfolios on mobile.

## 6. Build Steps (for the coding agent)

1. `npm create vite@latest . -- --template react-ts`
2. Install Tailwind, configure `tailwind.config.ts` with the palette in section 3 as
   custom theme colors (`olive: {50,200,400,600,800}`, `ink`, `ink-muted`, `background`).
3. Install and init shadcn/ui; add `button`, `card`, `badge`, `tabs`, `sheet` components.
4. Set up React Router with routes listed in section 2.
5. Build a shared `<GlassPanel>` wrapper component implementing the CSS spec in
   section 3 once, and reuse it everywhere (Hero card, skill groups, experience items,
   project cards) — do not hand-roll the glass styles per component.
6. Build sections top-to-bottom per section 4, using Shaun's real content.
7. Build the 2–3 demo projects from section 4 as their own routed pages/components.
8. Add basic SEO meta tags per section 5.
9. Run a Lighthouse/accessibility pass; fix contrast issues on glass-over-blob areas.
10. Prepare for deploy: `npm run build`, verify output, deploy to Vercel/Netlify.

## 7. Constraints / Things to avoid

- Don't fabricate metrics, employers, or dates beyond what's in the CV content above.
- Don't over-claim Next.js/Material UI/Shadcn seniority — label them as recently
  learned where relevant, since honesty matters for interview follow-up questions.
- Don't make glass panels illegible — always check text contrast against the blurred
  background blobs, especially on mobile where blobs may render differently.
- Don't add a backend/database for this version — keep it a static SPA; if a contact
  form is added, use a static-friendly service (Formspree, EmailJS) rather than a
  custom backend.
