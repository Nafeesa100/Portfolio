import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Na<span>feesa</span></div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
