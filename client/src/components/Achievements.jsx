import certSB from '../assets/sb.jpeg'
import certSQL from '../assets/sql.jpeg'
import certWeb from '../assets/web.jpeg'
import './Achievements.css'

const achievements = [
  {
    icon: '🥈',
    title: '2nd Place — Database Decathlon',
    sub: 'Talent Quest Fest 1.0 · UMT · May 2024',
    cert: certSQL,
  },
  {
    icon: '🌟',
    title: 'Volunteer — Student Body',
    sub: 'Talent Quest Fest 2.0 · UMT · Nov 2024',
    cert: certSB,
  },
  {
    icon: '🏆',
    title: 'Participant — Web Warriors',
    sub: 'Talent Quest Fest 2.0 · UMT · Nov 2024',
    cert: certWeb,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="reveal">
        <p className="section-label">Accomplishments</p>
        <h2 className="section-title">My <em>Achievements</em></h2>
        <div className="section-line" />
      </div>
      <div className="achievements-list">
        {achievements.map((a) => (
          <div className="ach-card reveal" key={a.title}>
            <div className="ach-top">
              <div className="ach-icon">{a.icon}</div>
              <div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-sub">{a.sub}</div>
              </div>
            </div>
            <div className="ach-cert-wrapper">
              <img src={a.cert} alt={a.title} className="ach-cert-img" />
              <div className="ach-cert-overlay">
                <a href={a.cert} target="_blank" rel="noreferrer" className="ach-cert-btn">
                  View Certificate →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}