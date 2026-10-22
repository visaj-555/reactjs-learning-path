import { NavLink, Route, Routes, Navigate, useParams, Link } from 'react-router-dom'
import { lessons } from './lessons'

function LessonPage() {
  const { id } = useParams()
  const i = lessons.findIndex((l) => l.id === id)
  if (i < 0) return <p>Lesson not found</p>
  const lesson = lessons[i]
  const Comp = lesson.component
  const prev = lessons[i - 1]
  const next = lessons[i + 1]
  return (
    <div>
      <p className="tag">Lesson {String(i + 1).padStart(2, '0')}</p>
      <h1 style={{ margin: '0.35rem 0 0' }}>{lesson.title}</h1>
      <div className="lesson-nav">
        {prev ? <Link to={`/lessons/${prev.id}`}><button type="button" className="secondary">← Prev</button></Link> : <button type="button" className="secondary" disabled>← Prev</button>}
        {next ? <Link to={`/lessons/${next.id}`}><button type="button">Next →</button></Link> : <button type="button" disabled>Next →</button>}
      </div>
      <Comp />
    </div>
  )
}

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>React Lifetime Path</h1>
        <nav>
          {lessons.map((l, i) => (
            <span key={l.id}>
              {(i === 0 || lessons[i - 1].group !== l.group) && (
                <p className="group-label">{l.group}</p>
              )}
              <NavLink to={`/lessons/${l.id}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                {String(i + 1).padStart(2, '0')}. {l.title}
              </NavLink>
            </span>
          ))}
        </nav>
      </aside>
      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to={`/lessons/${lessons[0].id}`} replace />} />
          <Route path="/lessons/:id/*" element={<LessonPage />} />
        </Routes>
      </main>
    </div>
  )
}
