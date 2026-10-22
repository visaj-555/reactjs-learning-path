/*
SUMMARY: React.memo skips a child re-render when props are shallow-equal. Inline {} / fns defeat it. Not always faster.
*/
import { memo, useState } from 'react'
import Notes from '../Notes'

const Expensive = memo(function Expensive({ label }) {
  console.log('Expensive render')
  return <p className="tag">{label}</p>
})

export default function Lesson33() {
  const [n, setN] = useState(0)
  const [label, setLabel] = useState('hello')
  return (
    <>
      <Notes
        def="React.memo(Component) wraps a component so it re-renders only when its props fail a shallow Object.is compare."
        pic="A bouncer — child gets in only if the props actually changed."
        hook="memo skips re-render when props are shallow-equal."
        ideas={['Parent n++ does not re-render Expensive while label stays "hello".', 'style={{}} or onClick={() => {}} is a new reference every time → memo is useless.', 'Pair with useCallback for handlers. Custom areEqual as 2nd arg if needed.']}
        sum="Memoize expensive pure children. Measure first. Unstable props = wasted memo."
        tryThis={['Pass style={{}} and watch it re-render', 'Custom areEqual', 'memo + useCallback handler']}
        quiz="Q: Is memo always faster? A: No — the comparison costs; use it when the skipped work is expensive."
      />
      <div className="demo stack">
        <h2>React.memo</h2>
        <div className="row">
          <button type="button" onClick={() => setN((x) => x + 1)}>parent {n}</button>
          <button type="button" className="secondary" onClick={() => setLabel((s) => s + '!')}>change prop</button>
        </div>
        <Expensive label={label} />
        <p className="muted">Console: Expensive skips when only parent n changes.</p>
      </div>
    </>
  )
}
