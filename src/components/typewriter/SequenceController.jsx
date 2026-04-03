import { useState } from 'react'
import Typewriter from '../Typewriter'

export default function SequenceController({ 
  lines, 
  speed = 25, 
  lineDelay = 300,
  onComplete 
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleLineComplete = (index) => {
    if (index < lines.length - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
      }, lineDelay)
    } else {
      onComplete?.()
    }
  }

  return (
    <div className="font-mono text-sm space-y-3">
      {lines.slice(0, currentIndex + 1).map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ${
            index === lines.length - 1 && index === currentIndex
              ? 'text-emerald-400'
              : 'text-gray-400'
          }`}
        >
          {index === currentIndex ? (
            <Typewriter
              text={line}
              speed={speed}
              onComplete={() => handleLineComplete(index)}
              showCursor={index < lines.length - 1}
            />
          ) : (
            <span>{line}</span>
          )}
        </div>
      ))}
    </div>
  )
}