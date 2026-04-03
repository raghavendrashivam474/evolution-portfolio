export default function Humanoid() {
  const skills = [
    { category: "UI Engine", items: ["React", "React Native", "Tailwind CSS"] },
    { category: "Processing Unit", items: ["Node.js", "FastAPI", "Python"] },
    { category: "Data Systems", items: ["Firebase", "Supabase", "PostgreSQL"] }
  ]

  const nextModules = [
    "Neural Networks",
    "Scalable Systems",
    "Security Architecture"
  ]

  return (
    <section id="about" style={{ 
      padding: '100px 24px', 
      backgroundColor: '#0a0a0a' 
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ 
            color: '#34d399', 
            fontFamily: 'monospace', 
            fontSize: '12px', 
            marginBottom: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            // SYSTEM_STATUS
          </p>
          <h2 style={{ 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            fontWeight: 700, 
            marginBottom: '12px',
            color: '#ffffff',
            letterSpacing: '-1px'
          }}>
            Core Modules
          </h2>
          <p style={{
            color: '#6b7280',
            fontSize: '16px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Current system capabilities and loaded modules
          </p>
        </div>

        {/* Skills Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px', 
          marginBottom: '80px' 
        }}>
          {skills.map((skill, i) => (
            <div 
              key={i} 
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(52, 211, 153, 0.15)',
                padding: '28px',
                borderRadius: '16px',
                minHeight: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.4)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(52, 211, 153, 0.1)'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(52, 211, 153, 0.15)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
              }}
            >
              {/* Top glow line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.3), transparent)'
              }} />

              <div>
                <h3 style={{ 
                  color: '#34d399', 
                  fontSize: '13px', 
                  fontFamily: 'monospace', 
                  marginBottom: '16px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {skill.category}
                </h3>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '8px' 
                }}>
                  {skill.items.map((item, j) => (
                    <span 
                      key={j} 
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        color: '#e5e7eb',
                        fontWeight: 500,
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(52, 211, 153, 0.15)'
                        e.target.style.borderColor = 'rgba(52, 211, 153, 0.3)'
                        e.target.style.color = '#34d399'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(255,255,255,0.06)'
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                        e.target.style.color = '#e5e7eb'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Identity Card */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
          padding: '32px',
          marginBottom: '80px',
          maxWidth: '600px',
          margin: '0 auto 80px'
        }}>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}>
            <div>
              <p style={{ color: '#6b7280', marginBottom: '4px' }}>ID:</p>
              <p style={{ color: '#34d399', fontWeight: 600 }}>Raghu_007</p>            </div>
            <div>
              <p style={{ color: '#6b7280', marginBottom: '4px' }}>Role:</p>
              <p style={{ color: '#ffffff' }}>Software Engineer</p>
            </div>
            <div>
              <p style={{ color: '#6b7280', marginBottom: '4px' }}>Focus:</p>
              <p style={{ color: '#ffffff' }}>Healthcare & Beyond</p>
            </div>
            <div>
              <p style={{ color: '#6b7280', marginBottom: '4px' }}>Status:</p>
              <p style={{ 
                color: '#34d399', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px' 
              }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#34d399', 
                  borderRadius: '50%',
                  display: 'inline-block'
                }}></span>
                Active
              </p>
            </div>
          </div>
        </div>

        {/* Loading Next Modules */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '60px',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: '#34d399', 
            fontSize: '12px', 
            fontFamily: 'monospace', 
            marginBottom: '24px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            Loading Next Modules
          </p>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '12px',
            marginBottom: '60px'
          }}>
            {nextModules.map((module, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  color: '#9ca3af',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(52, 211, 153, 0.4)'
                  e.target.style.color = '#34d399'
                  e.target.style.backgroundColor = 'rgba(52, 211, 153, 0.05)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.target.style.color = '#9ca3af'
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.02)'
                }}
              >
                <span style={{ color: '#34d399', marginRight: '8px', opacity: 0.6 }}>→</span>
                {module}
              </div>
            ))}
          </div>

          {/* Final Line */}
          <p style={{ 
            color: '#6b7280', 
            fontFamily: 'monospace', 
            fontSize: '13px',
            marginBottom: '60px'
          }}>
            &gt; System ready for next evolution.
          </p>
        </div>

        {/* Contact CTA */}
        <div id="contact" style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, rgba(52, 211, 153, 0.05) 0%, transparent 100%)',
          border: '1px solid rgba(52, 211, 153, 0.2)',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glow effect */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: 700, 
              marginBottom: '16px',
              color: '#ffffff'
            }}>
              Let's Build Together
            </h3>
            <p style={{ 
              color: '#9ca3af', 
              marginBottom: '32px', 
              maxWidth: '500px', 
              margin: '0 auto 32px',
              lineHeight: 1.6
            }}>
              Open to new opportunities and interesting healthcare projects.
            </p>
            <a 
              href="mailto:raghavendrashivam474@gmail.com"
              style={{
                backgroundColor: '#34d399',
                color: '#000000',
                padding: '16px 40px',
                borderRadius: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                transition: 'all 0.3s ease',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2dd4ac'
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 10px 30px rgba(52, 211, 153, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#34d399'
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}