import { useState, useEffect } from 'react'
import Typewriter from './Typewriter'

export default function MissionLaunch({ shouldStart = false }) {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (shouldStart) {
      // Small delay before starting
      setTimeout(() => {
        setShowContent(true)
      }, 300)
    }
  }, [shouldStart])

  if (!shouldStart) return null

  return (
    <div className="py-8 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-emerald-400 font-mono text-sm mb-8">
          {showContent && (
            <Typewriter 
              text="> Launching mission control..." 
              speed={30}
              onComplete={() => {
                // Trigger mission cards fade-in
                setTimeout(() => {
                  const cards = document.querySelectorAll('.mission-card')
                  cards.forEach((card, i) => {
                    setTimeout(() => {
                      card.classList.add('fade-in')
                      card.classList.remove('opacity-0')
                    }, i * 150)
                  })
                }, 400)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}