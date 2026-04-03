import { useEffect, useRef, useState } from 'react'

export default function ScrollTrigger({ 
  children, 
  threshold = 0.3,
  className = "",
  fallback = null 
}) {
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
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible, threshold])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}