import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-circle c1" />
      <div className="hero-bg-circle c2" />

      <div className="hero-content">
        <div className="hero-tag">✦ Available for Opportunities</div>
        <h1 className="hero-name">
          Hello, I'm<br />
          <em>Nafeesa.</em>
        </h1>
        <p className="hero-title">MERN Stack Developer</p>
        <p className="hero-desc">
          I build full-stack web applications with MongoDB, Express, React, and Node.js —
          crafting clean, performant, and user-centric digital experiences.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="avatar">N</div>
          <div className="card-name">Nafeesa</div>
          <div className="card-role">MERN Stack Developer</div>
          <div className="card-stats">
            <div className="stat">
              <div className="stat-num">3</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num">2nd</div>
              <div className="stat-label">DB Decathlon</div>
            </div>
            <div className="stat">
              <div className="stat-num">∞</div>
              <div className="stat-label">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
