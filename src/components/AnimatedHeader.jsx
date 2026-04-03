import { useEffect, useRef, useState } from 'react'
import Typewriter from './Typewriter'

export default function AnimatedHeader({ title, subtitle, mono = false }) {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div ref={ref} className="mb-16 text-center">
      {mono && (
        <div className="mb-3 text-emerald-400 font-mono text-sm tracking-wider">
          {isVisible ? (
            <Typewriter text={mono} speed={30} />
          ) : (
            <span className="opacity-0">{mono}</span>
          )}
        </div>
      )}
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {isVisible ? (
          <Typewriter text={title} speed={40} delay={mono ? 500 : 0} />
        ) : (
          <span className="opacity-0">{title}</span>
        )}
      </h2>
      
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}