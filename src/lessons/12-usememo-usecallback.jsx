/*
SUMMARY: useMemo caches a computed value. useCallback caches a function identity for memoized children. Don't memo by default.
*/
import { memo, useCallback, useMemo, useState } from 'react'
import Notes from '../Notes'

const Child = memo(function Child({ onPing }) {
  return <button type="button" className="secondary" onClick={onPing}>memo child ping</button>
})

export default function Lesson12() {
  const [n, setN] = useState(10)
  const [tick, setTick] = useState(0)
  const squares = useMemo(() => Array.from({ length: n }, (_, i) => i * i), [n]) // skip work if n unchanged
  const onPing = useCallback(() => alert('ping'), []) // stable fn so memo Child skips
  return (
    <>
      <Notes
        def="useMemo(() => value, deps) reuses last value if deps are equal. useCallback(fn, deps) is useMemo for functions — same identity until deps change."
        pic="Sticky notes: “reuse this unless the ingredients changed.”"
        hook="Don't memo by default — profile first."
        ideas={['Memoize expensive calcs, or values you pass to React.memo children.', 'Inline functions/objects are new every render — they break memo.', 'Wrong deps = stale bugs. Empty deps = never refresh.']}
        sum="Cache when work is heavy or identity matters to a memoized child. Otherwise skip — memo has a cost too."
        tryThis={['Remove useCallback and log inside Child', 'useMemo a heavy filter', 'Omit a dep on purpose and watch stale UI']}
        quiz="Q: Does useMemo skip effects? A: No. It only caches a value between renders."
      />
      <div className="demo stack">
        <h2>useMemo / useCallback</h2>
        <p className="muted">tick={tick} (unrelated re-render)</p>
        <div className="row">
          <button type="button" onClick={() => setTick((t) => t + 1)}>tick</button>
          <button type="button" className="secondary" onClick={() => setN((x) => x + 1)}>n={n}</button>
          <Child onPing={onPing} />
        </div>
        <p>last square: {squares.at(-1)}</p>
      </div>
    </>
  )
}
