// Everything the site says lives here, taken from Brent's master resume
// (Brent_Willis_Full_Stack_AI_Backend_Resume_2026). Keep the two in step:
// no numbers, clients or quotes that the resume cannot back up.

export const profile = {
  name: "Brent Willis",
  initials: "BW",
  role: "Senior Full Stack & AI Engineer",
  location: "Lorain, OH · Remote",
  email: "brentwillis296@gmail.com",
  linkedin: "https://www.linkedin.com/in/brent-willis-85b7ab437/",
  // In public/. Served from the site root (respecting the deploy base path).
  resume: "Brent-Willis-Resume.pdf",
  summary:
    "10+ years building and shipping production software across AI, healthcare, e-commerce and Web3 — with a strong backend foundation in Python, Node.js, APIs, databases and cloud, and a recent focus on production AI agents, chatbots and multi-step workflows.",
};

// Hero stats. Each one is countable straight off the resume.
export const stats = [
  { value: "10+", label: "Years shipping" },
  { value: "4", label: "Industries" },
  { value: "5", label: "Engineering teams" },
];

export const marquee = [
  "AI agents",
  "Chatbots",
  "Healthcare",
  "E-commerce",
  "Web3",
  "Payments",
  "Python",
  "Node.js",
  "PostgreSQL",
  "AWS",
];

// "What I do" — four practices, each with the tags a client will ask about.
export const practices = [
  {
    title: "AI Agents & Chatbots",
    description:
      "Agents, LLM-powered chatbots and multi-step workflows that retrieve business data, call external APIs and automate repetitive operations.",
    tags: ["Tool calling", "Workflow automation", "Structured outputs"],
  },
  {
    title: "Backend & APIs",
    description:
      "Reliable Python and Node.js services — orchestration, background jobs, retries, validation and failure recovery behind every feature.",
    tags: ["Python · Node.js", "REST · GraphQL", "WebSockets"],
  },
  {
    title: "Full-Stack Product",
    description:
      "React and Next.js interfaces for chat, workflow status, content review and operational dashboards, connected to the services behind them.",
    tags: ["React · Next.js", "TypeScript", "React Native"],
  },
  {
    title: "Cloud, Data & Integration",
    description:
      "Relational data models, query optimisation and cloud deployments, plus the webhooks, auth and third-party integrations that tie systems together.",
    tags: ["PostgreSQL", "AWS · GCP", "Docker · Kubernetes"],
  },
];

// The workflow demo: each run cycles through the same five stages the resume
// describes for production AI workflows.
export const loopStages = [
  {
    title: "Request",
    text: "A user request or business event arrives — chat message, ticket or webhook.",
  },
  {
    title: "Retrieve",
    text: "The agent pulls the business data it needs from databases and internal APIs.",
  },
  {
    title: "Act",
    text: "Tools are called against real systems, with background jobs for anything slow.",
  },
  {
    title: "Validate",
    text: "Structured outputs are checked; retries and fallbacks catch malformed or failed calls.",
  },
  {
    title: "Review",
    text: "Results land in a React dashboard where people can see status and review output.",
  },
];

export const loopRuns = [
  {
    objective: "Answer customer support questions",
    lines: [
      ["01", "request: \"Where is my order #4821?\""],
      ["02", "retrieve → orders API · shipping webhook history"],
      ["03", "tool: carrier.lookup(tracking_id)"],
      ["04", "! carrier API timeout — retry 1/3 with backoff"],
      ["05", "✓ response validated against reply schema"],
      ["06", "✓ answered · logged to support dashboard"],
    ],
  },
  {
    objective: "Search the internal knowledge base",
    lines: [
      ["01", "request: \"What is our refund policy for B2B?\""],
      ["02", "retrieve → policy documents · CRM account tier"],
      ["03", "llm: draft answer with cited sources"],
      ["04", "! output missing citations — regenerate"],
      ["05", "✓ structured output passes validation"],
      ["06", "✓ answer delivered · sources linked"],
    ],
  },
  {
    objective: "Automate a client back-office task",
    lines: [
      ["01", "event: webhook · new client onboarding form"],
      ["02", "retrieve → account record · required documents"],
      ["03", "job: create records in 3 external systems"],
      ["04", "! duplicate job detected — idempotency key reused"],
      ["05", "✓ records created once · state consistent"],
      ["06", "✓ status posted to workflow dashboard"],
    ],
  },
];

// Selected work — one card per engagement, from the resume's experience
// bullets. `points` are the two outcomes worth leading with.
export const work = [
  {
    sector: "AI",
    company: "GenAI.Labs",
    title: "Production AI agents & chatbots",
    summary:
      "AI agents, custom chatbots and AI-powered web apps that move AI capabilities into real business applications — from client requirements through deployment and production support.",
    points: [
      "Multi-step workflows that retrieve business data, call external APIs and automate client operations",
      "Malformed outputs, API failures and duplicate jobs tamed with structured outputs, retries, fallbacks and monitoring",
    ],
    stack: ["Python", "Node.js", "Next.js", "PostgreSQL", "LLM APIs"],
  },
  {
    sector: "Healthcare",
    company: "Mount Carmel Health System",
    title: "Healthcare data workflows",
    summary:
      "Backend features for healthcare data workflows, with emphasis on APIs, data integration, reliability and secure service-to-service communication.",
    points: [
      "RESTful services and data processing that improved interoperability between interfaces and backend systems",
      "Real-time data flows over WebSockets, with validation and error handling that reduced integration failures",
    ],
    stack: ["REST APIs", "WebSockets", "Cloud APIs", "React"],
  },
  {
    sector: "Web3",
    company: "CryptoSlam",
    title: "Blockchain & digital-asset apps",
    summary:
      "Data-heavy React and Next.js interfaces for blockchain and digital-asset workflows, with wallet connectivity built in.",
    points: [
      "MetaMask and WalletConnect integrations for Web3 user flows",
      "Asynchronous REST data flows in responsive, cross-browser experiences",
    ],
    stack: ["React", "Next.js", "TypeScript", "Material UI", "Node.js"],
  },
  {
    sector: "Payments",
    company: "Amazon",
    title: "Payment & integration services",
    summary:
      "Full-stack client applications across frontend and backend, connected through authentication, routing and reusable API contracts.",
    points: [
      "Refactored backend payment and integration services for maintainability, scalability and reliability",
      "Node.js proxy tooling that simulated external APIs for faster integration testing",
    ],
    stack: ["React", "Next.js", "Node.js", "REST APIs"],
  },
  {
    sector: "E-commerce",
    company: "Paymore",
    title: "E-commerce catalogue & search",
    summary:
      "Commerce functionality for product discovery, catalogue data, search, customer workflows and online purchasing.",
    points: [
      "PHP/Laravel services and REST APIs over relational data for core commerce workflows",
      "Unstructured product data cleaned into relational datasets that powered search",
    ],
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery"],
  },
];

// Case studies, from Brent's "Portfolio Project Case Studies" document
// (Portpolio_Bremt_project). Each is a representative project built from the
// work in his roles; the reference link is a comparable public product, not
// something he built, so it is always labelled that way.
export const projects = [
  {
    name: "FlowPilot AI",
    type: "AI workflow & agent automation",
    context: "GenAI.Labs · Mar 2023 — Present",
    role: "Senior Full Stack & AI Engineer",
    reference: {
      label: "Prismatic — Agentic Interactions",
      url: "https://prismatic.io/platform/agentic-interactions/",
    },
    overview: [
      "FlowPilot AI represents the AI workflow and agent automation systems built at GenAI.Labs. It connects intelligent agents with business data, APIs, databases and external services to automate multi-step operational processes.",
      "Agents interpret requests, retrieve information, make decisions, call external tools, transform data and trigger business actions — combining conversational AI with structured workflow execution, so AI runs as part of repeatable business processes rather than as a standalone chatbot.",
    ],
    stack: [
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Python", "Node.js"] },
      { label: "Database", items: ["PostgreSQL"] },
      { label: "AI", items: ["LLM APIs", "AI agents", "Tool calling", "Structured outputs"] },
      { label: "Integrations", items: ["REST", "GraphQL", "Webhooks"] },
      { label: "Infrastructure", items: ["Docker", "AWS", "CI/CD"] },
    ],
    built: [
      "Designed and implemented AI-powered workflow interfaces using React, Next.js and TypeScript.",
      "Built interfaces for workflow configuration, AI interactions, execution monitoring and generated-result review.",
      "Developed Python and Node.js backend services for AI orchestration and workflow execution.",
      "Implemented multi-step AI workflows that retrieve business data, call external APIs, process information and return structured results.",
      "Integrated REST APIs, GraphQL services, webhooks, databases, authentication systems and third-party services.",
      "Implemented tool-calling patterns that let AI agents interact with external business systems.",
      "Added structured output validation to reduce malformed or inconsistent AI responses.",
      "Implemented retry and fallback handling for failed AI or external API operations.",
      "Added safeguards against duplicate workflow execution and repeated background jobs.",
      "Built asynchronous processing and background-job workflows for longer-running operations.",
      "Developed dashboards and execution views for monitoring workflow status and operational activity.",
      "Debugged failures across AI services, APIs, background jobs, databases and frontend/backend communication.",
      "Worked across requirements, architecture, implementation, deployment, debugging and production support.",
    ],
    operations:
      "Containerised services, API-based architecture, asynchronous processing, validation, logging and recoverable workflow execution — shipped with Docker, cloud infrastructure, Git and CI/CD. Troubleshooting centred on AI response reliability, API failures, workflow execution, database interactions and integration failures.",
    challenges: [
      {
        title: "Reliable AI output",
        problem: "LLM responses can be incomplete, malformed or inconsistent.",
        solution:
          "Structured outputs, validation, retry handling, fallback behaviour and controlled tool interfaces made AI-generated results more predictable.",
      },
      {
        title: "Multi-step workflow reliability",
        problem:
          "A workflow can depend on several AI operations and external services, so one failure can affect the whole execution.",
        solution:
          "Separated workflow steps with execution-state handling, retries, validation and failure recovery, so individual operations could be diagnosed and recovered without restarting the entire process.",
      },
      {
        title: "External API integration",
        problem:
          "Business workflows talk to many APIs with different authentication and response formats.",
        solution:
          "Reusable integration patterns for authentication, request validation, response processing, error handling and API-specific business logic.",
      },
      {
        title: "Duplicate processing",
        problem:
          "Background jobs and external events can trigger the same operation more than once.",
        solution:
          "Execution safeguards and job-state validation reduced duplicate processing and kept workflow state consistent.",
      },
    ],
    outcome:
      "Production-oriented AI engineering that combines LLMs with workflow orchestration, APIs, databases, asynchronous processing and user-facing applications.",
  },
  {
    name: "MarketCore",
    type: "E-commerce marketplace & payments",
    context: "Paymore · Amazon",
    role: "Senior Full Stack Engineer",
    reference: {
      label: "Ecommpay",
      url: "https://ecommpay.com/",
    },
    overview: [
      "MarketCore represents the e-commerce and commerce-platform engineering work from Paymore and Amazon.",
      "It pairs a customer-facing shopping experience with backend services for product catalogues, search, customers, carts, orders, inventory, payments and external integrations — bringing together the full-stack patterns, commerce workflows, product-data processing and integration work from those roles.",
    ],
    stack: [
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript", "jQuery"] },
      { label: "Backend", items: ["Node.js", "NestJS", "PHP", "Laravel", "REST APIs"] },
      { label: "Database", items: ["PostgreSQL", "MySQL"] },
      { label: "Commerce", items: ["Catalogues", "Search", "Cart", "Checkout", "Orders", "Inventory"] },
      { label: "Payments", items: ["Payment APIs", "Transaction processing", "Webhooks"] },
      { label: "Infrastructure", items: ["Docker", "AWS", "CI/CD"] },
    ],
    built: [
      "Built customer-facing commerce interfaces using React, Next.js, JavaScript, HTML and CSS.",
      "Implemented product discovery, category navigation, search, filtering and product-detail experiences.",
      "Developed shopping cart and checkout workflows.",
      "Built customer account and order-history functionality.",
      "Designed REST APIs for products, customers, carts, orders, inventory and payment workflows.",
      "Implemented relational data models for commerce entities and operational workflows on PostgreSQL and MySQL.",
      "Implemented product-data processing and transformation workflows for structured commerce datasets.",
      "Integrated external payment and service APIs, with validation and error handling around payment and order operations.",
      "Worked with external API integrations, authentication, routing and request handling.",
      "Built backend integration and proxy functionality for development and testing workflows.",
      "Improved API behaviour and database query performance during development and troubleshooting.",
      "Debugged issues across frontend applications, backend services, databases, APIs and third-party integrations.",
      "Contributed across frontend, backend, data, integration and deployment concerns.",
    ],
    operations:
      "Cloud infrastructure, API-driven services, relational databases, source control and CI/CD, with backend services organised around reusable APIs and separated commerce responsibilities. Operational work covered API behaviour, database issues, frontend/backend integration, payment-service interactions and production issues.",
    challenges: [
      {
        title: "Product data quality",
        problem:
          "Commerce depends on consistent product information, but source data arrives in inconsistent formats with missing values.",
        solution:
          "Data-processing and transformation workflows normalised product information into structured datasets ready for commerce and search.",
      },
      {
        title: "Product discovery",
        problem: "Large catalogues need efficient search, filtering and retrieval.",
        solution:
          "API and database access patterns built around structured product data, category relationships, filtering, pagination and efficient retrieval.",
      },
      {
        title: "Payment and order reliability",
        problem:
          "Payments and order creation involve multiple states and external dependencies.",
        solution:
          "Validation, transaction-state handling, API error handling and integration logic kept payment and order workflows predictable.",
      },
      {
        title: "Frontend / backend integration",
        problem:
          "Commerce apps depend on consistent communication between the storefront and backend services.",
        solution:
          "Reusable API contracts and structured request/response handling across product, cart, checkout, customer and order workflows.",
      },
    ],
    outcome:
      "Full-stack commerce engineering covering customer-facing applications, backend APIs, relational databases, product data, commerce workflows, payment integrations and external services.",
  },
];

export const experience = [
  {
    role: "Senior AI Engineer",
    company: "GenAI.Labs",
    location: "United States · Remote",
    period: "Mar 2023 — Present",
    bullets: [
      "Build production AI agents, custom chatbots and AI-powered web applications using Python, Node.js, React, Next.js, PostgreSQL and LLM APIs.",
      "Design multi-step AI workflows that process user requests, retrieve business data, call external APIs and automate repetitive client operations.",
      "Develop LLM-powered chatbots for customer support and internal knowledge access, helping teams respond faster and handle more requests.",
      "Design backend orchestration with Python and Node.js — tool calling, background jobs, retries, validation and failure recovery.",
      "Integrate AI with existing business systems through REST APIs, GraphQL, webhooks, authentication, databases and third-party services.",
      "Resolve malformed model outputs, API failures, duplicate jobs and inconsistent responses with structured outputs, retry logic, fallbacks and monitoring.",
      "Build React/Next.js interfaces for chat, workflow status, AI-generated content review and operational dashboards.",
      "Own projects from client requirements and architecture through implementation, deployment, debugging and production support.",
    ],
  },
  {
    role: "Senior Backend Engineer",
    company: "Mount Carmel Health System",
    location: "United States · Remote",
    period: "Jan 2021 — Jan 2023",
    bullets: [
      "Built backend features for healthcare data workflows, with emphasis on APIs, data integration, reliability and secure service-to-service communication.",
      "Developed RESTful services and data-processing components that improved interoperability between application interfaces and backend systems.",
      "Implemented real-time data flows with WebSockets and integrated cloud APIs with customer-facing and operational interfaces.",
      "Applied data validation, error handling and integration patterns to reduce integration-related failures.",
      "Contributed to React frontend development while focusing primarily on backend services and production support.",
    ],
  },
  {
    role: "Web3 Application Engineer",
    company: "CryptoSlam Inc",
    location: "United States · Remote",
    period: "Dec 2018 — Dec 2020",
    bullets: [
      "Built data-heavy interfaces with React, Next.js, TypeScript and Material UI for blockchain and digital-asset workflows.",
      "Integrated MetaMask and WalletConnect for wallet connectivity and Web3 user flows.",
      "Integrated REST APIs and asynchronous data flows into responsive, cross-browser experiences.",
      "Worked with Node.js services and API layers supporting authentication, routing and client-side data.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Amazon",
    location: "United States · On-site",
    period: "Feb 2016 — Feb 2018",
    bullets: [
      "Delivered full-stack client applications using React, Next.js, Node.js, REST APIs and service integrations.",
      "Built data-driven interfaces connected to backend services through authentication, routing, request handling and reusable API contracts.",
      "Refactored backend payment and integration services to improve maintainability, scalability and reliability.",
      "Created Node.js proxy tooling to simulate external APIs and manage auth, headers and routing during integration testing.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Paymore",
    location: "United States · On-site",
    period: "Sep 2012 — Dec 2015",
    bullets: [
      "Built e-commerce functionality for product discovery, catalogue data, search, customer workflows and online purchasing.",
      "Developed backend services and REST APIs in PHP/Laravel with relational database integration.",
      "Implemented frontend features with HTML, CSS, JavaScript, jQuery, AJAX and JSON.",
      "Transformed unstructured product data into relational datasets used by search and commerce workflows.",
    ],
  },
];

export const principles = [
  {
    title: "AI inside real systems",
    text: "AI features earn their place by working with the APIs, databases and workflows a business already runs on.",
  },
  {
    title: "Reliability is designed in",
    text: "Validation, retries, fallbacks and monitoring are part of the first build, not a patch after the first outage.",
  },
  {
    title: "Backend first",
    text: "A clean data model and dependable services make every interface on top of them simpler to build and change.",
  },
  {
    title: "Owned end to end",
    text: "From requirements and architecture through deployment, debugging and production support — prototypes become maintainable products.",
  },
];

export const skills = [
  {
    group: "AI & Automation",
    items: ["AI agents", "Chatbots", "LLM APIs", "Workflow automation", "Classification models", "Data processing"],
  },
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "PHP"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express", "NestJS", "Django", "Laravel", "REST", "GraphQL", "WebSockets", "Microservices"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Data modelling", "Query optimisation"],
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Cloud Foundry", "Nginx", "CI/CD"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux", "React Native", "Tailwind CSS", "Material UI"],
  },
  {
    group: "Web3",
    items: ["MetaMask", "WalletConnect", "Blockchain integrations"],
  },
  {
    group: "Engineering",
    items: ["System design", "Authentication", "Testing", "Performance", "Technical leadership"],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  detail: "Minor in Machine Learning",
  school: "The Ohio State University",
  period: "Sep 2008 — Aug 2012",
};

export const navLinks = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
