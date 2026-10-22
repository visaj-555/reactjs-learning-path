/*
SUMMARY: Re-render when state/props/context change. Parent render re-renders children by default. Same Object.is value bails out.
*/
import { useState } from 'react'
import Notes from '../Notes'

function Child({ label }) {
  console.log('Child render', label)
  return <span className="tag">{label}</span>
}

export default function Lesson29() {
  const [n, setN] = useState(0)
  const [same, setSame] = useState(0)
  return (
    <>
      <Notes
        def="A re-render is React calling your function again to compute the next UI. It is triggered by state updates, new props, or context changes — not by mutating a variable."
        pic="Stage crew resetting the set when the script (state) changes."
        hook="State/props/context change → re-render that subtree."
        ideas={['Parent setState → children render too, even if their props look the same (unless memo).', 'setSame(0) when it’s already 0: Object.is bailout, no render.', 'Re-render ≠ DOM rewrite. Reconciliation may reuse DOM.']}
        sum="Render is cheap-ish; measure before memo. Console.log in Child to see the cascade."
        tryThis={['Wrap Child in React.memo', 'Update a context value', 'Change key to force remount']}
        quiz="Q: Child props unchanged — still re-render? A: Yes by default when the parent re-renders (unless memo)."
      />
      <div className="demo stack">
        <h2>What triggers re-renders</h2>
        <div className="row">
          <button type="button" onClick={() => setN((x) => x + 1)}>parent n={n}</button>
          <button type="button" className="secondary" onClick={() => setSame(0)}>set same 0 (bailout)</button>
        </div>
        <Child label={`n=${n}`} />
        <p className="muted">Open console — Child logs when parent state changes. same={same}</p>
      </div>
    </>
  )
}
