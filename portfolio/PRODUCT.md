# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** Engineering hiring managers and technical recruiters evaluating Aashish Bhambri for full-time frontend or full-stack software engineering roles.
- **Secondary:** Prospective freelance or project clients reaching out regarding web or AI product work.

## Product Purpose

Present Aashish Bhambri's software engineering background, production projects, core technical stack, and direct contact channels in a personal developer portfolio. Success means a recruiter or hiring manager can quickly assess role fit, inspect real engineering work and the resume PDF, and initiate contact without friction.

## Positioning

Full-stack React 19 and TypeScript engineer building production web applications and autonomous LLM/MCP agent workflows with measurable UI performance (including a 28% UI render speed optimization during his Software Engineering Internship at Webblaze Softech).

## Operating Context

- Visitors typically arrive from job applications, resume links, or developer profiles on desktop or mobile browsers to evaluate skills, browse featured projects and experience, open `/resume.pdf`, or send an inquiry.
- The contact form sends inquiries client-side via EmailJS using build-time environment variables (`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) configured for the deployed origin.

## Capabilities and Constraints

- **Implemented capabilities:** Profile summary (`LeftContent`) with resume download and external links; About/overview, Projects list, Experience & Education timeline, Developer Stack grid, and EmailJS-backed Contact form (`RightContent`).
- **Technical constraints:** Built with React 19, Vite, Tailwind CSS v4, Lenis smooth scrolling, Lucide icons, and `@emailjs/browser` (`@mui/material` and `@splinetool/react-spline` are also installed in `package.json`).
- **Open / unverified product items (do not assume or fabricate):**
  - LinkedIn link in `src/components/LeftContent.jsx` is currently a generic placeholder (`https://linkedin.com`).
  - Featured projects (`ShopEase`, `TaskFlow MCP`, `GameVerse Hub`) currently have no live demo or GitHub repository URLs wired up, and `TaskFlow MCP` and `GameVerse Hub` still use external Framer placeholder thumbnails.
  - Summary metrics (`03+ FEATURED APPS`, `500+ HOURS CODED`), unused `src/components/Tools.jsx`, and unused 3D Spline globe assets (`src/components/TechCube3D.jsx`, `public/spline.html`, `public/Spline_asset.html`) are not yet confirmed as permanent product commitments.

## Brand Commitments

- **Name & Identity:** Aashish Bhambri — Full-Stack Software Engineer.
- **Existing brand assets:** AB monogram (`public/favicon.svg`, `src/assets/ab-monogram.svg`).
- **Factual biography to preserve:** B.E. CSE at Chandigarh University (2022–2026) and Software Engineering Intern at Webblaze Softech, unless explicitly updated by the user.

## Evidence on Hand

- **Resume:** `public/resume.pdf`
- **GitHub:** `https://github.com/Aashish-Bhambri`
- **Project thumbnail on disk:** `public/shopease-thumbnail.png` (for `ShopEase` — Full-Stack E-Commerce Platform using React 19, Redux & Tailwind)
- **Listed projects in `src/components/Project.jsx`:** `ShopEase`, `TaskFlow MCP` (Autonomous Project Orchestration Platform), and `GameVerse Hub` (Video Game Discovery & Analytics Platform)
- **Experience claims in `src/components/Experience.jsx`:** 28% UI render speed optimization and REST API integration at Webblaze Softech; `98+ Lighthouse scores` referenced for self-directed SaaS projects (no Lighthouse report artifact in repo)
- **Absences future work must not fabricate:** Unverified live project URLs, missing LinkedIn URL, client testimonials, employer logos, or unconfirmed metrics.

## Product Principles

1. **Lead with verifiable engineering proof:** Highlight real projects, concrete technical outcomes, and direct access to the resume and source code rather than generic filler.
2. **Keep hiring evaluation fast:** Make role focus, core stack, experience, and contact immediately scannable across desktop and mobile.
3. **Never fabricate missing evidence:** Keep unlinked projects, placeholder URLs, and absent testimonials honestly absent or explicitly pending until real assets are supplied.
4. **Protect working lead capture:** Preserve reliable EmailJS validation, environment-variable error reporting, and accessible form feedback.
