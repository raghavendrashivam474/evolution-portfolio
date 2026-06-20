// src/data/projects.js
// Project mission data for Transformation.jsx
// Update content here. Never touch MissionCard.jsx or Transformation.jsx for content changes.

export const projects = [
  {
    id: "syaahi",
    title: "Syaahi",
    tagline: "Where emotions become words.",
    preview: [
      "Personal expression platform",
      "Poetry, journals, letters & memories",
      "Preserve and revisit meaningful moments",
    ],
    problem:
      "People have emotions, memories, and stories they want to capture — but no dedicated space designed for personal, meaningful writing.",
    solution:
      "Syaahi provides a calm, focused platform for poetry, journals, letters, and memories. Designed for expression, preservation, and reflection.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Node.js"],
    impact: "Active Development — v0.2.0 in progress",
    status: "ACTIVE",
    links: {
      github: "",
      release: "",
    },
  },
  {
    id: "gradeflow",
    title: "GradeFlow",
    tagline: "Understand performance beyond marks.",
    preview: [
      "Academic analytics platform",
      "Track progress and identify trends",
      "Built for students, teachers, and institutions",
    ],
    problem:
      "Marks alone don't tell the full story. Students and educators lack clear visibility into performance patterns and actionable academic insights.",
    solution:
      "GradeFlow provides an analytics layer over academic data — tracking progress, surfacing trends, and helping all stakeholders make informed decisions.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    impact: "MVP Development — Core analytics engine in progress",
    status: "BUILDING",
    links: {
      github: "",
      release: "",
    },
  },
  {
    id: "vibeflow",
    title: "VibeFlow",
    tagline: "Organize the soundtrack of your life.",
    preview: [
      "Music intelligence platform",
      "Mood-based discovery and organization",
      "Personal music management reimagined",
    ],
    problem:
      "Music libraries grow chaotic. Existing platforms optimize for streaming revenue, not for personal music organization and meaningful discovery.",
    solution:
      "VibeFlow puts the listener in control — intelligent playlist organization, mood-based experiences, and a personal relationship with your music.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "AI Systems"],
    impact: "Research & Design — Architecture and UX in definition",
    status: "RESEARCH",
    links: {
      github: "",
      release: "",
    },
  },
  {
    id: "schoolflow-os",
    title: "SchoolFlow OS",
    tagline: "The operating system for modern institutions.",
    preview: [
      "Unified institutional platform",
      "Academics, admin, and communication",
      "Analytics and operations in one system",
    ],
    problem:
      "Educational institutions operate across disconnected tools for academics, administration, communication, and analytics — creating friction at every level.",
    solution:
      "SchoolFlow OS is a long-term vision to unify every institutional function into a single, coherent operating system built for modern education.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Supabase", "AI Systems"],
    impact: "Vision Stage — Research and system architecture ongoing",
    status: "VISION",
    links: {
      github: "",
      release: "",
    },
  },
];