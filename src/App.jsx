import { useState } from 'react'
import Human from './components/Human'
import SystemBoot from './components/SystemBoot'
import Transformation from './components/Transformation'
import Humanoid from './components/Humanoid'
import Section from './components/Section'

function App() {
  const [visibleSections, setVisibleSections] = useState({
    hero: true,
    system: true,
    projects: false,
    modules: false
  })

  const handleSystemComplete = () => {
    setTimeout(() => {
      setVisibleSections(prev => ({ ...prev, projects: true }))
    }, 800)

    setTimeout(() => {
      setVisibleSections(prev => ({ ...prev, modules: true }))
    }, 1600)
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a', 
      color: '#fff',
      width: '100%'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="#" style={{ fontSize: '18px', fontWeight: 600, textDecoration: 'none', color: '#fff' }}>
            raghu<span style={{ color: '#34d399' }}>_007</span>
          </a>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#projects" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>Projects</a>
            <a href="#about" style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none' }}>About</a>
            <a href="#contact" style={{ 
              fontSize: '14px', 
              backgroundColor: '#fff', 
              color: '#000', 
              padding: '8px 16px', 
              borderRadius: '20px',
              textDecoration: 'none'
            }}>Contact</a>
          </div>
        </div>
      </nav>

      <Section show={visibleSections.hero}>
        <Human />
      </Section>

      <Section show={visibleSections.system}>
        <SystemBoot onComplete={handleSystemComplete} />
      </Section>

      <Section show={visibleSections.projects}>
        <Transformation />
      </Section>

      <Section show={visibleSections.modules}>
        <Humanoid />
      </Section>
      
      <Section show={visibleSections.modules}>
        <footer style={{
          padding: '32px 24px',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: '#6b7280',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <p>© 2025 Raghavendra Singh</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a 
                href="https://github.com/YOUR_USERNAME" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#6b7280', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/YOUR_USERNAME" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#6b7280', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              >
                LinkedIn
              </a>
              <a 
                href="mailto:raghavendrashivam474@gmail.com" 
                style={{ 
                  color: '#6b7280', 
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </Section>
    </div>
  )
}

export default App