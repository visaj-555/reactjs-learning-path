/*
SUMMARY: Fetch in useEffect. Always model loading / data / error. Ignore results after unmount (alive flag).
*/
import { useEffect, useState } from 'react'
import { API } from '../api'
import Notes from '../Notes'

export default function Lesson19() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    let alive = true
    setLoading(true)
    fetch(`${API}/todos`)
      .then((r) => { if (!r.ok) throw new Error(r.statusText); return r.json() })
      .then((d) => { if (alive) { setTodos(d); setError(null) } })
      .catch((e) => { if (alive) setError(e.message) })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [])
  return (
    <>
      <Notes
        def="Async UI has three states: loading (waiting), success (data), error (failed). You must render all three or the screen lies."
        pic="Ordering food: waiting, plate arrives, or kitchen error."
        hook="Always model loading / data / error."
        ideas={['setLoading(true) before await. catch → error state. finally → loading false.', 'alive/abort so a slow response doesn’t setState after unmount or after a newer request.', 'Needs backend running (GET /todos). Vite proxies /api → :3000.']}
        sum="Hand-rolled fetch is: effect + three states + ignore stale. Next lesson: TanStack Query does this for you."
        tryThis={['Refresh button', 'POST a new todo', 'Retry on error']}
        quiz="Q: Why the alive flag? A: Avoid setState after unmount / ignore stale responses."
      />
      <div className="demo stack">
        <h2>Fetch loading/error</h2>
        {loading && <p>Loading…</p>}
        {error && <p className="err">{error}</p>}
        <ul className="list">{todos.map((t) => <li key={t.id}>{t.title} {t.done ? '✓' : ''}</li>)}</ul>
      </div>
    </>
  )
}
