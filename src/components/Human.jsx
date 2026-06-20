export default function Human() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #111 0%, #000 100%)'
      }}
    >
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/5 rounded-full blur-3xl"></div>

      <div style={{ maxWidth: '900px', width: '100%', position: 'relative', zIndex: 10 }}>
        {/* Status Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
          border: '1px solid rgba(52, 211, 153, 0.2)',
          borderRadius: '20px',
          padding: '8px 16px',
          marginBottom: '24px'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#34d399',
            borderRadius: '50%'
          }}></span>
          <span style={{ color: '#34d399', fontSize: '12px', fontFamily: 'monospace' }}>
            System Status: Initializing
          </span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1 }}>
          Hi, I'm <span style={{ color: '#34d399' }}>Raghavendra Singh</span>
          <br />
          <span style={{ color: '#9ca3af' }}>I build impactful solutions.</span>
        </h1>

        {/* Description */}
        <p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', lineHeight: 1.7, marginBottom: '40px' }}>
          Software Engineer specializing in healthcare technology. 
          I create offline-first applications and real-world systems that solve meaningful problems.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '12px 24px',
            borderRadius: '25px',
            fontWeight: 500,
            textDecoration: 'none'
          }}>View Projects</a>
          <a href="#contact" style={{
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '12px 24px',
            borderRadius: '25px',
            fontWeight: 500,
            textDecoration: 'none',
            color: '#fff'
          }}>Get in touch</a>
        </div>

        {/* Scroll Indicator */}
        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#6b7280', fontFamily: 'monospace', marginBottom: '12px' }}>
            Scroll to witness evolution
          </p>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, #34d399, transparent)',
            margin: '0 auto'
          }}></div>
        </div>
      </div>
    </section>
  )
}