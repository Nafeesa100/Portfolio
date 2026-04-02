import './Projects.css'

const projects = [
  {
    emoji: '📦',
    thumb: 'p1',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    title: 'Inventory Management System',
    desc: 'A full-stack inventory management solution built with the complete MERN stack. Features product tracking, stock management, and real-time updates.',
    demo: '#',
    github: '#',
  },
  {
    emoji: '🌐',
    thumb: 'p2',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    title: 'Digital Impacts Website Clone',
    desc: 'A responsive frontend clone with reusable components and modern UI layouts. Focused on clean design, responsiveness, and component-based architecture.',
    demo: 'https://digital-impacts.vercel.app/',
    github: 'https://github.com/Nafeesa100/digital-impacts.git',
  },
  {
    emoji: '✅',
    thumb: 'p3',
    tags: ['React', 'State Mgmt', 'UI/UX'],
    title: 'To-Do Application',
    desc: 'A dynamic task management app with create, update, delete, and completion features. Includes filtering logic for completed/pending tasks.',
    demo: 'https://todoapp-five-ashy.vercel.app/',
    github: "https://github.com/Nafeesa100/TODOAPP.git",
  },
]

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="reveal">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Featured <em>Projects</em></h2>
        <div className="section-line" />
      </div>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card reveal" key={p.title}>
            <div className={`project-thumb ${p.thumb}`}>{p.emoji}</div>
            <div className="project-body">
              <div className="project-tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-links">
                <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalIcon /> Live Demo
                </a>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                    <GithubIcon /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
