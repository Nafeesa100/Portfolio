import './Skills.css'

const skills = [
  { icon: '🍃', name: 'MongoDB', level: 'Database', pct: 85 },
  { icon: '⚡', name: 'Express.js', level: 'Backend Framework', pct: 80 },
  { icon: '⚛️', name: 'React', level: 'Frontend Library', pct: 90 },
  { icon: '🟢', name: 'Node.js', level: 'Runtime', pct: 82 },
  { icon: '🎨', name: 'Tailwind CSS', level: 'Styling', pct: 88 },
  { icon: '💛', name: 'JavaScript', level: 'Core Language', pct: 87 },
  { icon: '🐙', name: 'Git & GitHub', level: 'Version Control', pct: 78 },
  { icon: '🔗', name: 'REST APIs', level: 'Integration', pct: 83 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="reveal">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title">My <em>Tech Stack</em></h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card reveal" key={s.name}>
            <div className="skill-icon">{s.icon}</div>
            <div className="skill-name">{s.name}</div>
            <div className="skill-level">{s.level}</div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
