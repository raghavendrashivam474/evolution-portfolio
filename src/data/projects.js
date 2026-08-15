// ============================================================
// src/data/projects.js
// SINGLE SOURCE OF TRUTH for all mission and project data.
// Transformation.jsx imports from here — no local project arrays.
// ============================================================

// ============================================================
// ACTIVE MISSIONS — Flagship systems currently being built
// ============================================================

export const activeMissions = [
  {
    id: "01",
    title: "Aryntra Anveksha",
    tagline: "Organizational Intelligence",
    preview: [
      "Institutional knowledge graph construction",
      "Document ingestion and semantic indexing",
      "Natural language querying over org knowledge",
      "Context-aware retrieval and summarization"
    ],
    problem:
      "Organizations accumulate vast institutional knowledge across documents, wikis, and conversations — yet this knowledge remains fragmented and practically inaccessible. Teams waste hours searching for information that already exists somewhere in the system.",
    solution:
      "Anveksha is an organizational intelligence system that ingests institutional documents, constructs a semantic knowledge layer, and enables natural language querying over the organization's collective knowledge. It makes existing knowledge findable and actionable.",
    tech: "Python · LangChain · Vector Databases · Semantic Search · Document Parsing · LLM Integration",
    impact:
      "Transforms static document repositories into queryable, living knowledge systems that surface the right information when teams need it.",
    status: "ACTIVE",
    github: "https://github.com/raghavendrashivam474/Aryntra_Anveksha",
    apk: ""
  },

  {
    id: "02",
    title: "Aryntra Aayaam",
    tagline: "Developer Intelligence",
    preview: [
      "Software repository analysis and understanding",
      "Codebase relationship and dependency mapping",
      "Code capability and impact surface extraction",
      "Developer-facing intelligence layer over software systems"
    ],
    problem:
      "Software systems grow in complexity faster than any individual's ability to understand them. Developers spend significant time orienting themselves in unfamiliar codebases, tracing dependencies, and understanding the impact surface of changes — time that should be spent building.",
    solution:
      "Aayaam is a developer intelligence system that analyzes software repositories to extract structure, relationships, capabilities, and evolution patterns. It builds an understanding layer over codebases so developers can navigate and reason about software systems faster.",
    tech: "Python · Static Analysis · AST Parsing · Graph Structures · LLM Integration · Repository Indexing",
    impact:
      "Reduces the cognitive overhead of working with complex software systems by building a machine-readable understanding of what a codebase does, how it is structured, and how its parts relate.",
    status: "ACTIVE",
    github: "https://github.com/raghavendrashivam474/aryntra-aayaam",
    apk: ""
  },

  {
    id: "03",
    title: "Aryntra Tarka",
    tagline: "Local AI Infrastructure",
    preview: [
      "Modular AI orchestration backend",
      "Intelligent planner with ~90% baseline accuracy",
      "Tool registry: calculator, datetime, search, weather",
      "Prompt building, expression normalization, execution planning"
    ],
    problem:
      "Building AI applications that rely entirely on cloud APIs creates dependency, latency, and cost problems. There is no clean, modular infrastructure layer for running AI planning and tool orchestration locally — forcing builders to either over-engineer from scratch or accept cloud lock-in.",
    solution:
      "Tarka is a local AI infrastructure and intelligent orchestration framework. It provides a modular backend with an intelligent planner, a tool registry with concrete tool implementations, prompt construction pipelines, expression normalization, and execution planning — designed to run AI reasoning workloads locally and reliably.",
    tech: "Python · Local LLM Inference · Tool Registry Architecture · Prompt Engineering · Execution Planning · Planner Evaluation",
    impact:
      "Current planner baseline at approximately 90% accuracy. Active sprint focus on planner stabilization and execution reliability. Provides a reusable AI infrastructure foundation for the broader Aryntra ecosystem.",
    status: "ACTIVE — Stabilizing",
    github: "https://github.com/raghavendrashivam474/aryntra-tarka",
    apk: ""
  }
]

// ============================================================
// OTHER SYSTEMS — Previous, experimental, and supporting work
// Preserved as evidence of the engineering journey.
// ============================================================

export const otherSystems = [
  {
    id: "OS-01",
    title: "Syaahi",
    tagline: "Ink-to-text conversion for regional languages",
    status: "PREVIOUS",
    tech: "React Native · ML · OCR",
    github: "https://github.com/raghavendrashivam474/syaahi",
    apk: ""
  },
  {
    id: "OS-02",
    title: "PRISM",
    tagline: "Research intelligence and knowledge synthesis system",
    status: "EXPERIMENTAL",
    tech: "Python · NLP · Knowledge Graphs",
    github: "https://github.com/raghavendrashivam474/prism",
    apk: ""
  },
  {
    id: "OS-03",
    title: "Dev-Vault",
    tagline: "Developer resource organization and retrieval system",
    status: "PREVIOUS",
    tech: "React · Node.js · MongoDB",
    github: "https://github.com/raghavendrashivam474/dev-vault",
    apk: ""
  },
  {
    id: "OS-04",
    title: "Backtrace",
    tagline: "Automated error tracing and root cause analysis",
    status: "EXPERIMENTAL",
    tech: "Python · Log Analysis · LLM Integration",
    github: "https://github.com/raghavendrashivam474/Aryntra-Backtrace",
    apk: ""
  },
  {
    id: "OS-05",
    title: "GradeFlow",
    tagline: "Academic performance tracking and analytics",
    status: "PREVIOUS",
    tech: "React · Supabase · Data Visualization",
    github: "https://github.com/raghavendrashivam474/GradeFlow",
    apk: ""
  }]


