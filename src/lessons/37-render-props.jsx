/*
SUMMARY: A render prop is a function you pass in; the component supplies state, you supply the UI. Today, custom hooks often replace this.
*/
import { useState } from 'react'
import Notes from '../Notes'

function Toggle({ render }) {
  const [on, setOn] = useState(false)
  return render({ on, toggle: () => setOn((v) => !v) }) // inversion of control
}

export default function Lesson37() {
  return (
    <>
      <Notes
        def="A render prop is a function prop (often named render or children) that receives state and returns JSX. The child owns behavior; you own appearance."
        pic="Someone hands you LEGO pieces and asks you how to assemble them."
        hook="Component provides state; you provide the UI function."
        ideas={['Toggle doesn’t know about buttons vs switches — you decide in render={...}.', 'children as a function is the same pattern.', 'Custom hooks (useToggle) are the modern, simpler alternative.']}
        sum="Learn the pattern (still in old libs). Prefer hooks for new code unless you need a component wrapper."
        tryThis={['children as function', 'Mouse-position render prop', 'Rewrite Toggle as useToggle']}
        quiz="Q: Modern alternative? A: Custom hooks that return state/helpers."
      />
      <div className="demo stack">
        <h2>Render props</h2>
        <Toggle
          render={({ on, toggle }) => (
            <div className="row">
              <span>{on ? 'ON' : 'OFF'}</span>
              <button type="button" onClick={toggle}>toggle</button>
            </div>
          )}
        />
      </div>
    </>
  )
}
