/*
SUMMARY: Hooks must run in the same order every render: top-level only, only in React functions / custom hooks.
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson14() {
  const [ok, setOk] = useState(true)
  // ❌ if (ok) { const [x, setX] = useState(0) }  // React would lose which state is which
  const [n, setN] = useState(0) // always called — order stable
  return (
    <>
      <Notes
        def="Rules of Hooks: call hooks at the top of a React function, never in loops/conditions/nested fns, and only from components or custom hooks."
        pic="A numbered checklist — skip a line and every later tick is on the wrong row."
        hook="Top level only. Same order. Always."
        ideas={['React matches hook state by call order, not by name.', 'Conditional UI is fine: {ok && <Child/>}. Conditional useState is not.', 'eslint-plugin-react-hooks catches this. Trust it.']}
        sum="Always call the same hooks in the same order. Hide UI, not hook calls. Extract a child if a branch needs extra hooks."
        tryThis={['Confirm the eslint plugin is on', 'Move extra state into a child instead of an if', 'Write a custom hook that’s always called']}
        quiz="Q: Why no hooks in if? A: Call order is how React maps state between renders."
      />
      <div className="demo stack">
        <h2>Rules of Hooks</h2>
        <p>Conditional state is OK; conditional hook calls are not.</p>
        <div className="row">
          <button type="button" onClick={() => setOk((v) => !v)}>flag={String(ok)}</button>
          {ok && <button type="button" className="secondary" onClick={() => setN((x) => x + 1)}>n={n}</button>}
        </div>
        <p className="muted">ESLint plugin react-hooks enforces this.</p>
      </div>
    </>
  )
}
