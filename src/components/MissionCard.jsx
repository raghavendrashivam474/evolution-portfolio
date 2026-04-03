import { useState } from 'react'

export default function MissionCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        padding: '40px',
        backgroundColor: isExpanded ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${isHovered || isExpanded ? 'rgba(52, 211, 153, 0.5)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: isHovered && !isExpanded ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 10px 40px rgba(0,0,0,0.3)' : 'none',
        boxSizing: 'border-box'
      }}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => !isExpanded && setIsHovered(false)}
      onClick={() => setIsExpanded(prev => !prev)}
    >
      {/* DEFAULT STATE */}
      {!isExpanded && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr auto',
          gap: '40px',
          alignItems: 'start'
        }}>
          {/* LEFT - Content */}
          <div style={{ maxWidth: '600px' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{
                backgroundColor: 'rgba(52, 211, 153, 0.15)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                padding: '8px 14px',
                borderRadius: '8px',
                color: '#34d399',
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 600
              }}>
                MISSION {project.id}
              </span>
              <span style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                color: '#6b7280', 
                fontSize: '12px' 
              }}>
                <span style={{ 
                  width: '6px', 
                  height: '6px', 
                  backgroundColor: '#34d399', 
                  borderRadius: '50%' 
                }}></span>
                Active
              </span>
            </div>

            {/* Title */}
            <h3 style={{ 
              fontSize: '28px', 
              fontWeight: 700, 
              marginBottom: '10px',
              color: '#ffffff'
            }}>
              {project.title}
            </h3>
            
            <p style={{ 
              fontSize: '16px', 
              color: '#9ca3af', 
              lineHeight: 1.6,
              marginBottom: isHovered ? '24px' : '0'
            }}>
              {project.tagline}
            </p>

            {/* Hover Preview */}
            {isHovered && (
              <div style={{ 
                paddingLeft: '16px', 
                borderLeft: '2px solid rgba(52, 211, 153, 0.4)'
              }}>
                <p style={{ 
                  color: '#34d399', 
                  fontSize: '11px', 
                  fontFamily: 'monospace', 
                  marginBottom: '12px', 
                  textTransform: 'uppercase'
                }}>
                  Quick Preview
                </p>
                {project.preview.map((item, i) => (
                  <p key={i} style={{ 
                    color: '#d1d5db', 
                    fontSize: '14px', 
                    marginBottom: '6px'
                  }}>
                    <span style={{ color: '#34d399', marginRight: '8px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT - Action Hint */}
          <div style={{ 
            textAlign: 'right',
            fontFamily: 'monospace',
            fontSize: '11px',
            color: isHovered ? '#34d399' : '#4b5563'
          }}>
            {isHovered ? '[ CLICK ]' : '[ HOVER ]'}
          </div>
        </div>
      )}

      {/* EXPANDED STATE */}
      {isExpanded && (
        <div>
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '24px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                backgroundColor: 'rgba(52, 211, 153, 0.15)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                padding: '8px 14px',
                borderRadius: '8px',
                color: '#34d399',
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 600
              }}>
                MISSION {project.id}
              </span>
              <span style={{ color: '#34d399', fontSize: '12px' }}>● EXPANDED</span>
            </div>
            <span style={{ 
              color: '#6b7280', 
              fontSize: '11px', 
              fontFamily: 'monospace' 
            }}>
              [ CLICK TO COLLAPSE ]
            </span>
          </div>

          {/* Title */}
          <h3 style={{ 
            fontSize: '32px', 
            fontWeight: 700, 
            marginBottom: '10px',
            color: '#ffffff'
          }}>
            {project.title}
          </h3>
          <p style={{ 
            fontSize: '18px', 
            color: '#9ca3af', 
            marginBottom: '32px' 
          }}>
            {project.tagline}
          </p>

          {/* Problem & Solution */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px', 
            marginBottom: '32px' 
          }}>
            <div>
              <p style={{ 
                color: '#34d399', 
                fontSize: '11px', 
                fontFamily: 'monospace', 
                marginBottom: '10px', 
                textTransform: 'uppercase' 
              }}>
                Problem
              </p>
              <p style={{ color: '#d1d5db', lineHeight: 1.7 }}>{project.problem}</p>
            </div>
            <div>
              <p style={{ 
                color: '#34d399', 
                fontSize: '11px', 
                fontFamily: 'monospace', 
                marginBottom: '10px', 
                textTransform: 'uppercase' 
              }}>
                Solution
              </p>
              <p style={{ color: '#d1d5db', lineHeight: 1.7 }}>{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ 
              color: '#34d399', 
              fontSize: '11px', 
              fontFamily: 'monospace', 
              marginBottom: '12px', 
              textTransform: 'uppercase' 
            }}>
              Key Features
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '8px' 
            }}>
              {project.preview.map((item, i) => (
                <p key={i} style={{ color: '#9ca3af', fontSize: '14px' }}>
                  <span style={{ color: '#34d399', marginRight: '8px' }}>→</span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '32px' }}>
            <p style={{ 
              color: '#34d399', 
              fontSize: '11px', 
              fontFamily: 'monospace', 
              marginBottom: '12px', 
              textTransform: 'uppercase' 
            }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.split(', ').map((tech, i) => (
                <span key={i} style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#d1d5db'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          {project.impact && (
            <div style={{
              backgroundColor: 'rgba(52, 211, 153, 0.1)',
              border: '1px solid rgba(52, 211, 153, 0.2)',
              padding: '16px 20px',
              borderRadius: '12px',
              marginBottom: '32px'
            }}>
              <p style={{ color: '#34d399', fontSize: '15px' }}>
                💡 {project.impact}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={project.apk}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: '#34d399',
                color: '#000000',
                padding: '14px 28px',
                borderRadius: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px'
              }}
            >
              ⬇️ Download APK
            </a>
            <a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              style={{
                color: '#9ca3af',
                padding: '14px 20px',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              View Source →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}