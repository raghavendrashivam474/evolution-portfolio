import { useState, useEffect, useRef } from 'react'
import Typewriter from './Typewriter'

const bootLines = [
  "> Initializing modules...",
  "> Loading systems...",
  "> Parsing experiences...",
  "> Building solutions...",
  "> Solving real-world problems...",
  "> System ready."
]

export default function SystemBoot({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer - Start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setIsVisible(true)
          setHasPlayed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasPlayed])

  const handleLineComplete = (index) => {
    if (index < bootLines.length - 1) {
      setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 300)
    } else {
      // Final line completed - trigger next sections
      setTimeout(() => {
        onComplete?.()
      }, 800)
    }
  }

  return (
    <section 
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        backgroundColor: '#000',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ maxWidth: '700px', width: '100%' }}>
        {isVisible ? (
          <div style={{ fontFamily: 'monospace', fontSize: '14px' }}>
            {bootLines.slice(0, currentLine + 1).map((line, index) => (
              <div 
                key={index} 
                style={{ 
                  marginBottom: '12px',
                  color: index === bootLines.length - 1 && index === currentLine 
                    ? '#34d399' 
                    : '#9ca3af'
                }}
              >
                {index === currentLine ? (
                  <Typewriter
                    text={line}
                    speed={25}
                    onComplete={() => handleLineComplete(index)}
                  />
                ) : (
                  <span>{line}</span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ height: '200px' }} />
        )}
      </div>
    </section>
  )
}