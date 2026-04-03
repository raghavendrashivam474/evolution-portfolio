export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto max-w-6xl px-6 sm:px-8 lg:px-16 ${className}`}>
      {children}
    </div>
  )
}