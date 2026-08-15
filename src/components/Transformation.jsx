// ============================================================
// src/components/Transformation.jsx
//
// Layout:
//   Active Missions → 3-column horizontal grid (compact by default)
//                     Each MissionCard handles its own expand behavior
//   Other Systems   → Compact 3-column grid below
//
// Styling: inline styles (matches App.jsx / SystemBoot.jsx convention)
// ============================================================

import React from "react"
import MissionCard from "./MissionCard"
import { activeMissions, otherSystems } from "../data/projects"

const Transformation = ({ visible }) => {
  if (!visible) return null

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        padding: "80px 24px",
        maxWidth: "1400px",
        margin: "0 auto"
      }}
    >
      {/* ── Section Header ─────────────────────────────────────── */}
      <div style={{ marginBottom: "48px" }}>
        <p
          style={{
            fontSize: "12px",
            fontFamily: "monospace",
            color: "#34d399",
            letterSpacing: "0.15em",
            marginBottom: "12px",
            opacity: 0.7
          }}
        >
          // MISSION_CONTROL
        </p>
        <h2
          style={{
            fontSize: "36px",
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "12px"
          }}
        >
          Active Missions
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontFamily: "monospace",
            color: "#9ca3af",
            letterSpacing: "0.05em"
          }}
        >
          Systems being designed, built, and shipped. Click to expand.
        </p>
      </div>

      {/* ── Active Missions — 3-column horizontal grid ─────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          marginBottom: "96px",
          alignItems: "start"
        }}
      >
        {activeMissions.map((mission) => (
          <MissionCard key={mission.id} project={mission} />
        ))}
      </div>

      {/* ── Other Systems — Compact secondary section ───────────── */}
      <div
        style={{
          borderTop: "1px solid #1f2937",
          paddingTop: "64px"
        }}
      >
        <div style={{ marginBottom: "40px" }}>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "monospace",
              color: "#6b7280",
              letterSpacing: "0.15em",
              marginBottom: "12px",
              opacity: 0.7
            }}
          >
            // ARCHIVE
          </p>
          <h3
            style={{
              fontSize: "22px",
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#9ca3af",
              marginBottom: "12px"
            }}
          >
            Other Systems
          </h3>
          <p
            style={{
              fontSize: "12px",
              fontFamily: "monospace",
              color: "#4b5563",
              letterSpacing: "0.05em"
            }}
          >
            Previous builds, experiments, and supporting systems.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px"
          }}
        >
          {otherSystems.map((sys) => (
            <OtherSystemCard key={sys.id} sys={sys} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Inline compact card for Other Systems ──────────────────────
const OtherSystemCard = ({ sys }) => {
  const [hover, setHover] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${hover ? "#4b5563" : "#1f2937"}`,
        backgroundColor: "#0a0a0a",
        padding: "20px",
        borderRadius: "2px",
        transition: "border-color 0.3s ease",
        cursor: "default"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px"
        }}
      >
        <span
          style={{
            fontSize: "11px",
            fontFamily: "monospace",
            color: "#4b5563",
            letterSpacing: "0.15em"
          }}
        >
          {sys.id}
        </span>
        <span
          style={{
            fontSize: "10px",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
            padding: "2px 8px",
            borderRadius: "2px",
            border: `1px solid ${hover ? "#6b7280" : "#374151"}`,
            color: hover ? "#9ca3af" : "#6b7280",
            transition: "all 0.3s ease"
          }}
        >
          {sys.status}
        </span>
      </div>

      <h4
        style={{
          fontSize: "14px",
          fontFamily: "monospace",
          fontWeight: 700,
          color: hover ? "#fff" : "#d1d5db",
          marginBottom: "4px",
          transition: "color 0.3s ease"
        }}
      >
        {sys.title}
      </h4>

      <p
        style={{
          fontSize: "12px",
          fontFamily: "monospace",
          color: hover ? "#9ca3af" : "#6b7280",
          marginBottom: "16px",
          lineHeight: 1.5,
          transition: "color 0.3s ease"
        }}
      >
        {sys.tagline}
      </p>

      <p
        style={{
          fontSize: "11px",
          fontFamily: "monospace",
          color: hover ? "#6b7280" : "#374151",
          transition: "color 0.3s ease"
        }}
      >
        {sys.tech}
      </p>

      {sys.github && (
        <a
          href={sys.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "16px",
            fontSize: "11px",
            fontFamily: "monospace",
            color: "#6b7280",
            textDecoration: "none",
            letterSpacing: "0.15em",
            transition: "color 0.3s ease"
          }}
          onMouseEnter={(e) => (e.target.style.color = "#34d399")}
          onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
        >
          → GITHUB
        </a>
      )}
    </div>
  )
}

export default Transformation
