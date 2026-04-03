import { useEffect, useRef, useState } from 'react'
import SystemLogs from './SystemLogs'

export default function Transition() {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.disconnect() // Run only once
        }
      },
      { threshold: 0.3 } // Start when 30% visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section 
      ref={ref}
      className="py-32 px-6 bg-black border-y border-white/5 min-h-[60vh] flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto">
        {isVisible ? (
          <SystemLogs />
        ) : (
          // Placeholder to prevent layout shift
          <div className="h-40"></div>
        )}
      </div>
    </section>
  )
}