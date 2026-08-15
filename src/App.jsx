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

  // Force-unlock every section and scroll to the target anchor.
  // Used by nav links so visitors can skip the boot sequence.
  const skipToSection = (id) => {
    setVisibleSections({
      hero: true,
      system: true,
      projects: true,
      modules: true
    })
    // Sections mount asynchronously; retry until the anchor exists in the DOM.
    let attempts = 0
    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (attempts < 20) {
        attempts++
        setTimeout(tryScroll, 50)
      }
    }
    setTimeout(tryScroll, 50)
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
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); skipToSection('projects') }}
              style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none', cursor: 'pointer' }}
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); skipToSection('about') }}
              style={{ fontSize: '14px', color: '#9ca3af', textDecoration: 'none', cursor: 'pointer' }}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); skipToSection('contact') }}
              style={{
                fontSize: '14px',
                backgroundColor: '#fff',
                color: '#000',
                padding: '8px 16px',
                borderRadius: '20px',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <Section show={visibleSections.hero}>
        <Human skipToSection={skipToSection} />
      </Section>

      <Section show={visibleSections.system}>
        <SystemBoot onComplete={handleSystemComplete} />
      </Section>

      <Section show={visibleSections.projects}>
        <Transformation visible={visibleSections.projects} />
      </Section>

      <Section show={visibleSections.modules}>
        <div id="about">
          <Humanoid />
        </div>
      </Section>

      <Section show={visibleSections.modules}>
        <footer id="contact" style={{
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
            <p>© 2026 Raghavendra Singh</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a
                href="https://github.com/raghavendrashivam474"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11 11 0 0 1 5.81 0c2.22-1.49 3.19-1.18 3.19-1.18.62 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/raghavendra-singh-2335292ab/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
                </svg>
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
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13.065 0 5.5V19a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5.5l-12 7.565zM22 3H2a2 2 0 0 0-2 2v.217l12 7.566L24 5.217V5a2 2 0 0 0-2-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </Section>
    </div>
  )
}

export default App



