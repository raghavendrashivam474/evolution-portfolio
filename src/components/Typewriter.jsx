import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 30, onComplete, delay = 0 }) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    let i = 0
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setIsTyping(false)
        setShowCursor(false)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, onComplete, isTyping])

  return (
    <span>
      {displayText}
      {showCursor && (
        <span style={{
          display: 'inline-block',
          width: '2px',
          height: '16px',
          backgroundColor: '#34d399',
          marginLeft: '4px',
          animation: 'blink 1s infinite'
        }} />
      )}
    </span>
  )
}