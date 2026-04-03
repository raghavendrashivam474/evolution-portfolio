import MissionCard from './MissionCard'

export default function Transformation() {
  const projects = [
    {
      id: "01",
      title: "SwasthyaSathi",
      tagline: "Offline-first healthcare system",
      preview: [
        "Intelligent patient triage",
        "Offline-first architecture",
        "Rural deployment ready"
      ],
      problem: "Emergency rooms in rural areas lack connectivity and efficient patient prioritization systems.",
      solution: "Offline-first mobile app with intelligent triage algorithm that syncs when connection is available.",
      tech: "React Native, SQLite, Node.js, Express",
      impact: "Deployed in 5+ rural healthcare centers",
      apk: "https://github.com/YOUR_USERNAME/swasthya-sathi/releases",
      github: "https://github.com/YOUR_USERNAME/swasthya-sathi"
    },
    {
      id: "02",
      title: "Hospital PHR",
      tagline: "Secure patient health records",
      preview: [
        "End-to-end encryption",
        "Role-based access control",
        "Real-time sync"
      ],
      problem: "Hospitals struggle with fragmented patient data across multiple systems without proper security.",
      solution: "Centralized, encrypted patient record system with granular access controls and audit logging.",
      tech: "React, Firebase, FastAPI, Tailwind CSS",
      impact: "Managing 1000+ patient records",
      apk: "https://github.com/YOUR_USERNAME/hospital-phr/releases",
      github: "https://github.com/YOUR_USERNAME/hospital-phr"
    }
  ]

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
          <p style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '14px', marginBottom: '16px' }}>
            // MISSION_CONTROL
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, marginBottom: '16px' }}>
            Active Projects
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Real-world applications solving healthcare challenges through technology.
          </p>
        </div>

        {/* Project Cards */}
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