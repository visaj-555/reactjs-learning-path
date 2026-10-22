/*
SUMMARY: React events are camelCase function props. Pass the function, don't call it during render.
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson06() {
  const [log, setLog] = useState([])
  const push = (msg) => setLog((xs) => [msg, ...xs].slice(0, 5))
  return (
    <>
      <Notes
        def="An event handler is a function React calls when the user acts (click, type, submit). You pass the function as a prop."
        pic="Doorbells: user rings, your handler answers."
        hook="Pass the function, don't call it: onClick={fn}."
        ideas={['onClick={fn} stores a reference; onClick={fn()} runs now (wrong).', 'e.preventDefault() stops native submit/navigation.', 'e.stopPropagation() stops the click bubbling to parents.']}
        sum="Handlers are camelCase props. Use arrows to pass extra args. preventDefault for forms; stopPropagation when parent shouldn't hear the click."
        tryThis={['onKeyDown: Enter to push a log', 'Remove stopPropagation and click the button', 'onClick={() => push("id-1")} to pass an id']}
        quiz="Q: Why onClick={fn} not onClick={fn()}? A: fn() runs during render; you need a function React can call later."
      />
      <div className="demo stack">
        <h2>Events</h2>
        <div className="row" onClick={() => push('parent click')} style={{ padding: 8, border: '1px dashed var(--border)' }}>
          <button type="button" onClick={(e) => { e.stopPropagation(); push('button (stopped)') }}>stopPropagation</button>
          <form onSubmit={(e) => { e.preventDefault(); push('submit prevented') }}>
            <button type="submit">submit</button>
          </form>
          <input onChange={(e) => push(`typed: ${e.target.value}`)} placeholder="type…" />
        </div>
        <ul className="list">{log.map((l, i) => <li key={i}>{l}</li>)}</ul>
      </div>
    </>
  )
}
