export default function Section({ show, children, delay = 0 }) {
  return (
    <div
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(40px)',
        filter: show ? 'blur(0)' : 'blur(8px)',
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        pointerEvents: show ? 'auto' : 'none'
      }}
    >
      {show && children}
    </div>
  )
}