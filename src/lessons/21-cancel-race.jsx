/*
SUMMARY: Fast typing can finish out of order. AbortController cancels the previous fetch so only the latest result wins.
*/
import { useEffect, useState } from 'react'
import { API } from '../api'
import Notes from '../Notes'

export default function Lesson21() {
  const [q, setQ] = useState('')
  const [result, setResult] = useState([])
  const [note, setNote] = useState('')
  useEffect(() => {
    const ac = new AbortController()
    setNote('fetching…')
    const delay = Math.random() * 800
    const t = setTimeout(async () => {
      try {
        const r = await fetch(`${API}/todos`, { signal: ac.signal })
        const data = await r.json()
        setResult(data.filter((x) => x.title.toLowerCase().includes(q.toLowerCase())))
        setNote(`ok (delay ${delay | 0}ms)`)
      } catch (e) {
        if (e.name !== 'AbortError') setNote(e.message)
        else setNote('aborted')
      }
    }, delay)
    return () => { clearTimeout(t); ac.abort() }
  }, [q])
  return (
    <>
      <Notes
        def="A race condition here: an older request finishes after a newer one and paints stale results. Cancel the loser with AbortController."
        pic="Two pizza deliveries — eat only the last order you placed."
        hook="AbortController cancels the loser."
        ideas={['fetch(url, { signal }) rejects with AbortError when abort() runs.', 'Cleanup of the effect (q changed) should abort + clearTimeout.', 'Debounce (wait 300ms) reduces how many races you start.']}
        sum="Every new keystroke invalidates the last flight. Abort it. Optionally debounce. Query libraries do this for you."
        tryThis={['Remove abort and type fast', 'Use a request-id counter instead of abort', 'Debounce 300ms']}
        quiz="Q: What is AbortError? A: fetch rejected because AbortController.abort() was called."
      />
      <div className="demo stack">
        <h2>Cancel & races</h2>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="type to race" />
        <p className="muted">{note}</p>
        <ul className="list">{result.map((t) => <li key={t.id}>{t.title}</li>)}</ul>
      </div>
    </>
  )
}
