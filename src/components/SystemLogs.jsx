import { useState } from 'react'
import Typewriter from './Typewriter'

const lines = [
  "> Initializing modules...",
  "> Loading systems...",
  "> Parsing experiences...",
  "> Building solutions...",
  "> Solving real-world problems...",
  "> System ready."
]

export default function SystemLogs() {
  const [currentLine, setCurrentLine] = useState(0)

  const handleLineComplete = (index) => {
    if (index < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine(index + 1)
      }, 300)
    }
  }

  return (
    <div className="font-mono text-sm space-y-3">
      {lines.slice(0, currentLine + 1).map((line, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ${
            index === lines.length - 1 && index === currentLine
              ? 'text-emerald-400'
              : 'text-gray-400'
          }`}
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
  )
}