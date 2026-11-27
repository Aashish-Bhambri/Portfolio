export const projects = [
  {
    slug: 'api-monitor',
    name: 'Api Monitor',
    title: 'API Monitoring Platform',
    shortDes: 'Real-time uptime tracking, Redis/BullMQ worker queues & latency telemetry.',
    subtitle: 'Building reliable endpoint monitoring infrastructure with automated health checks and incident telemetry.',
    img: '/apiMonitor.png',
    liveUrl: 'https://api-monitor-qtlz.vercel.app/',
    githubUrl: 'https://github.com/Aashish-Bhambri',
    status: 'In Progress',
    role: 'Full-Stack Engineer',
    timeline: 'Ongoing · 2026',
    team: 'Solo Build',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'Redis', 'BullMQ'],
    slides: [
      {
        type: 'image',
        src: '/apiMonitor.png',
        caption: 'Monitor Telemetry & Real-Time Latency Dashboard',
      },
      {
        type: 'architecture',
        title: 'Distributed Worker Pipeline',
        nodes: [
          { label: 'Scheduler', detail: 'BullMQ Repeatable Jobs (60s intervals)' },
          { label: 'Queue Engine', detail: 'Redis Streams & Retry Backoff' },
          { label: 'Health Probes', detail: 'HTTP Status + Latency Measurement' },
          { label: 'Telemetry Store', detail: 'PostgreSQL Timeseries & Incidents' },
        ],
      },
      {
        type: 'highlights',
        title: 'Live Dashboard Telemetry',
        stats: [
          { value: '60s', label: 'Automated Ping Interval' },
          { value: 'HTTP 200', label: 'Instant Status Verification' },
          { value: 'Real-Time', label: 'Latency Trend Charting' },
        ],
      },
    ],
    overview:
      'API Monitor is a full-stack observability and uptime monitoring platform engineered to continuously probe web endpoints, track response latency trends, and surface incidents in real time. Built around reliable background job processing, it gives developers clear visibility into uptime percentage, failure counts, and historical ping performance from one unified workspace.',
    challenge:
      'Polling external APIs reliably on strict intervals cannot live safely inside synchronous request handlers or fragile setInterval loops. Network timeouts, transient failures, and overlapping scheduled checks can easily exhaust connections or drop monitoring events if queue orchestration and retry state are not persisted.',
    solution:
      'Decoupled health-check scheduling from the web server using Redis and BullMQ background workers. Each registered monitor schedules repeatable probe jobs with isolated timeout guards, recording HTTP status codes, round-trip latency in milliseconds, and continuous uptime windows into PostgreSQL for fast workspace querying.',
    architecture: [
      'Background job orchestration powered by Redis and BullMQ repeatable queues for deterministic 60-second check intervals.',
      'Relational PostgreSQL schema storing workspace monitors, individual ping logs, latency percentiles, and open incident states.',
      'Interactive React + TypeScript telemetry workspace featuring live ping triggers, pause/resume controls, and latency trend visualization.',
    ],
    outcome:
      'Delivered a working full-stack monitoring workspace capable of executing automated checks, triggering on-demand endpoint probes, and rendering live uptime metrics and incident status pages with sub-100ms UI responsiveness.',
  },
  {
    slug: 'shopease',
    name: 'ShopEase',
    title: 'ShopEase E-Commerce Platform',
    shortDes: 'Full-Stack E-Commerce Platform (React 19, Redux & Tailwind)',
    subtitle: 'Creating a fast, friction-free online retail storefront with persistent cart state and instant filtering.',
    img: '/shopease-thumbnail.png',
    liveUrl: 'https://shop-ease-ten-lovat.vercel.app/',
    githubUrl: 'https://github.com/Aashish-Bhambri',
    status: 'Live',
    role: 'Full-Stack Engineer',
    timeline: '2026 Release',
    team: 'Solo Build',
    stack: ['React 19', 'Redux Toolkit', 'Tailwind CSS', 'Vite'],
    slides: [
      {
        type: 'image',
        src: '/shopease-thumbnail.png',
        caption: 'Curated Storefront & High-Performance Product Catalog',
      },
      {
        type: 'architecture',
        title: 'Client State & Catalog Flow',
        nodes: [
          { label: 'React 19 UI', detail: 'Modular Catalog & Cart Drawer' },
          { label: 'Redux Store', detail: 'Normalized Cart & Quantity Slices' },
          { label: 'Facet Engine', detail: 'Category, Price & Search Indexing' },
          { label: 'Persistence', detail: 'Zero-Loss LocalStorage Hydration' },
        ],
      },
      {
        type: 'highlights',
        title: 'Storefront Engineering Metrics',
        stats: [
          { value: '< 50ms', label: 'Instant Catalog Filtering' },
          { value: 'Zero CLS', label: 'Smooth Card & Cart Transitions' },
          { value: '100%', label: 'Mobile Checkout Drawer Support' },
        ],
      },
    ],
    overview:
      'ShopEase is a modern e-commerce web application built with React 19, Redux Toolkit, and Tailwind CSS. Designed around instant product discovery and seamless cart interactions, it brings together multi-category browsing, quick search filtering, and a responsive slide-over checkout workflow.',
    challenge:
      'Shopping interfaces often feel sluggish when category filters, search queries, and cart quantity mutations trigger full-tree re-renders or lose item state across page reloads—especially on mobile viewports where screen space is constrained.',
    solution:
      'Structured global cart and catalog state with Redux Toolkit slices and memoized selectors so additions, removals, and quantity updates execute instantaneously with zero layout shift. Paired the storefront with a responsive slide-over cart drawer and persistent client storage.',
    architecture: [
      'React 19 component hierarchy separating catalog filtering, product cards, and checkout summary drawers.',
      'Redux Toolkit centralized cart engine handling quantity synchronization, subtotal calculation, and empty-state recovery.',
      'Responsive Tailwind CSS grid layouts tailored for fast scanning across mobile, tablet, and desktop breakpoints.',
    ],
    outcome:
      'Shipped a responsive, production-deployed e-commerce storefront with fast client-side filtering, reliable cart persistence, and clean user flows deployed on Vercel.',
  },
  {
    slug: 'vault',
    name: 'Vault',
    title: 'Vault',
    shortDes: 'Video Game Discovery & Analytics Platform',
    subtitle: 'Exploring thousands of video game titles with dynamic API filtering, ratings insights, and rich media cards.',
    img: '/vault-thumbnail.png',
    liveUrl: 'https://vault-delta-seven.vercel.app/',
    githubUrl: 'https://github.com/Aashish-Bhambri',
    status: 'Live',
    role: 'Frontend Engineer',
    timeline: '2025 Release',
    team: 'Solo Build',
    stack: ['React', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
    slides: [
      {
        type: 'image',
        src: '/vault-thumbnail.png',
        caption: 'Game Discovery Catalog & Visual Showcase',
      },
      {
        type: 'architecture',
        title: 'API Query & Rendering Pipeline',
        nodes: [
          { label: 'Query State', detail: 'Genre, Platform & Sort Parameters' },
          { label: 'API Client', detail: 'Debounced Search & Canceled Requests' },
          { label: 'Media Grid', detail: 'Responsive Cards & Rating Badges' },
          { label: 'Detail View', detail: 'Metadata, Platforms & Metacritic Scores' },
        ],
      },
      {
        type: 'highlights',
        title: 'Discovery Experience',
        stats: [
          { value: 'Multi-Filter', label: 'Genre & Platform Sorting' },
          { value: 'Debounced', label: 'Rate-Limit Friendly Search' },
          { value: 'Responsive', label: 'Adaptive Card Layouts' },
        ],
      },
    ],
    overview:
      'GameVerse Hub is a video game discovery and analytics platform that lets players browse trending releases, filter across platforms and genres, inspect Metacritic ratings, and explore detailed game metadata in a dark editorial interface.',
    challenge:
      'Handling large external game catalogs with rapid filter switching and search typing can trigger race conditions, redundant API calls, and janky image loading across grid layouts.',
    solution:
      'Implemented clean query-parameter state management with debounced search inputs and request cancellation so stale responses never overwrite newer user selections, paired with skeleton states and responsive aspect-ratio media cards.',
    architecture: [
      'Unified filter state synchronizing genre sidebar selection, platform dropdowns, sort order, and keyword queries.',
      'Resilient REST API fetching layer with loading skeletons and clean fallback handling.',
      'High-contrast dark UI card grid emphasizing cover artwork, platform icons, and critical score badges.',
    ],
    outcome:
      'Delivered a fast, responsive game discovery web app live on Vercel, demonstrating clean API orchestration and responsive visual hierarchy.',
  },
]

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug)
