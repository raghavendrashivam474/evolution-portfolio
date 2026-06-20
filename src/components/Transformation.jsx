import MissionCard from './MissionCard'

const projects = [
  {
    id: "01",
    title: "Syaahi",
    tagline: "Where emotions become words.",
    preview: [
      "Personal expression platform",
      "Poetry, journals, letters & memories",
      "Preserve and revisit meaningful moments",
    ],
    problem: "People have emotions, memories, and stories they want to capture — but no dedicated space designed for personal, meaningful writing.",
    solution: "Syaahi provides a calm, focused platform for poetry, journals, letters, and memories. Designed for expression, preservation, and reflection.",
    tech: "React, TypeScript, Tailwind CSS, Supabase, Node.js",
    impact: "Active Development — v0.2.0 in progress",
    apk: "",
    github: "",
  },
  {
    id: "02",
    title: "GradeFlow",
    tagline: "Understand performance beyond marks.",
    preview: [
      "Academic analytics platform",
      "Track progress and identify trends",
      "Built for students, teachers, and institutions",
    ],
    problem: "Marks alone don't tell the full story. Students and educators lack clear visibility into performance patterns and actionable academic insights.",
    solution: "GradeFlow provides an analytics layer over academic data — tracking progress, surfacing trends, and helping all stakeholders make informed decisions.",
    tech: "React, TypeScript, Node.js, Express.js, MongoDB",
    impact: "MVP Development — Core analytics engine in progress",
    apk: "",
    github: "",
  },
  {
    id: "03",
    title: "VibeFlow",
    tagline: "Organize the soundtrack of your life.",
    preview: [
      "Music intelligence platform",
      "Mood-based discovery and organization",
      "Personal music management reimagined",
    ],
    problem: "Music libraries grow chaotic. Existing platforms optimize for streaming revenue, not for personal music organization and meaningful discovery.",
    solution: "VibeFlow puts the listener in control — intelligent playlist organization, mood-based experiences, and a personal relationship with your music.",
    tech: "React, TypeScript, Tailwind CSS, Node.js, AI Systems",
    impact: "Research & Design — Architecture and UX in definition",
    apk: "",
    github: "",
  },
  {
    id: "04",
    title: "SchoolFlow OS",
    tagline: "The operating system for modern institutions.",
    preview: [
      "Unified institutional platform",
      "Academics, admin, and communication",
      "Analytics and operations in one system",
    ],
    problem: "Educational institutions operate across disconnected tools for academics, administration, communication, and analytics — creating friction at every level.",
    solution: "SchoolFlow OS is a long-term vision to unify every institutional function into a single, coherent operating system built for modern education.",
    tech: "React, TypeScript, Node.js, MongoDB, Supabase, AI Systems",
    impact: "Vision Stage — Research and system architecture ongoing",
    apk: "",
    github: "",
  },
]

export default function Transformation() {
  return (
    <section id="projects" style={{
      padding: '100px 24px',
      backgroundColor: '#000',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%'
      }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            color: '#34d399',
            fontFamily: 'monospace',
            fontSize: '14px',
            marginBottom: '16px'
          }}>
            // MISSION_CONTROL
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            Active Missions
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Products being designed, built, and shipped.
          </p>
        </div>

        {/* Mission Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          width: '100%'
        }}>
          {projects.map((project) => (
            <MissionCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}