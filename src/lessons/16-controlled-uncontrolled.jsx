/*
SUMMARY: Controlled = React state is the truth (value+onChange). Uncontrolled = the DOM holds the value (defaultValue+ref).
*/
import { useRef, useState } from 'react'
import Notes from '../Notes'

export default function Lesson16() {
  const [name, setName] = useState('')
  const emailRef = useRef(null)
  return (
    <>
      <Notes
        def="A controlled input’s value lives in React state. An uncontrolled input keeps value in the DOM; you read it via a ref when needed."
        pic="Controlled = you hold the steering wheel. Uncontrolled = the car drives; you glance at the dashboard (ref)."
        hook="value+onChange = controlled; defaultValue+ref = uncontrolled."
        ideas={['Controlled: every keystroke updates state → easy validation, disable, derived UI.', 'Uncontrolled: less re-renders; good for simple forms and <input type="file"> (always uncontrolled).', 'Never mix value and defaultValue on the same input.']}
        sum="Need live UI from the field → controlled. One-shot read / file / tiny form → uncontrolled is fine."
        tryThis={['Disable a button until name.length > 2', 'Add a file input', 'Convert email to controlled']}
        quiz="Q: Mix value and defaultValue? A: No — pick one mode per input."
      />
      <div className="demo stack">
        <h2>Controlled vs uncontrolled</h2>
        <label>Controlled name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <p className="muted">live: {name || '…'}</p>
        <label>Uncontrolled email
          <input ref={emailRef} defaultValue="you@example.com" />
        </label>
        <button type="button" onClick={() => alert(emailRef.current?.value)}>read email ref</button>
      </div>
    </>
  )
}
