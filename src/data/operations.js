// ============================================================
// src/data/operations.js
// Current operational status — consumed by Humanoid.jsx.
// Answers: "What is Raghav actively working on right now?"
// ============================================================

const operations = [
  {
    id: "op-01",
    status: "ACTIVE",
    name: "Aryntra Anveksha",
    description: "Organizational Intelligence",
    detail:
      "Institutional knowledge ingestion, semantic indexing, and natural language querying over organizational knowledge graphs."
  },
  {
    id: "op-02",
    status: "ACTIVE",
    name: "Aryntra Aayaam",
    description: "Developer Intelligence",
    detail:
      "Software repository analysis, codebase relationship mapping, and developer-facing intelligence over complex software systems."
  },
  {
    id: "op-03",
    status: "ACTIVE — Stabilizing",
    name: "Aryntra Tarka",
    description: "Local AI Infrastructure",
    detail:
      "Modular AI orchestration backend with intelligent planner (~90% baseline), tool registry, prompt building, and execution planning."
  }
]

export default operations
