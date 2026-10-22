/*
SUMMARY: React 18 batches all setStates in the same tick (events, timeouts, promises) into one render.
*/
import { useRef, useState } from 'react'
import Notes from '../Notes'

export default function Lesson30() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const renders = useRef(0)
  renders.current += 1
  return (
    <>
      <Notes
        def="Batching means several setState calls in one event/timeout are applied together, so React paints once with the final a and b."
        pic="Several letters in one envelope — one trip to the mailbox."
        hook="Multiple setStates → one re-render (React 18+)."
        ideas={['Click handler: setA+setB → renders increases by 1, not 2.', 'Timeouts/promises also batch in React 18 (automatic batching).', 'flushSync() forces a paint in between — rare, mostly for measurements.']}
        sum="Write two setters freely. React will combine them. Don’t fight batching unless you must read the DOM mid-update."
        tryThis={['flushSync around one setter', 'React Profiler to count commits', 'Three setStates in one click']}
        quiz="Q: Why batch? A: Skip intermediate paints and keep a and b consistent."
      />
      <div className="demo stack">
        <h2>Batching</h2>
        <p>a={a} b={b} · renders={renders.current}</p>
        <div className="row">
          <button type="button" onClick={() => { setA((x) => x + 1); setB((x) => x + 1) }}>both in handler (1 render)</button>
          <button type="button" className="secondary" onClick={() => { setTimeout(() => { setA((x) => x + 1); setB((x) => x + 1) }, 0) }}>both in timeout (still batched)</button>
        </div>
      </div>
    </>
  )
}
