/*
SUMMARY: key is instance identity. Same key keeps local state; new key remounts (reset). State follows key, not position.
*/
import { useState } from 'react'
import Notes from '../Notes'

function Box({ label }) {
  const [text, setText] = useState('')
  return (
    <label className="stack">
      {label}
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="type local state" />
    </label>
  )
}

export default function Lesson31() {
  const [swap, setSwap] = useState(false)
  return (
    <>
      <Notes
        def="A key tells React which component instance is which across renders. Local state is glued to that identity, not to the slot on screen."
        pic="Employee IDs — swap name tags and people keep their desks."
        hook="Key tells React which instance is which."
        ideas={['Type in both boxes, toggle keys: text travels with key=x / key=y, not with first/second position.', 'Want a reset? Change key (form key={id} or key={step}).', 'Index keys on reorder = state stuck on the wrong row.']}
        sum="Keys are identity. Stable unique keys preserve state. Changing a key is a clean remount."
        tryThis={['key={Date.now()} to force remount', 'Reorder a list with index keys', 'Reset a form by changing its key']}
        quiz="Q: How to reset component state cleanly? A: Change its key so React remounts a fresh instance."
      />
      <div className="demo stack">
        <h2>Keys & identity</h2>
        <button type="button" onClick={() => setSwap((s) => !s)}>toggle keys</button>
        {swap ? (
          <>
            <Box key="x" label="key=x" />
            <Box key="y" label="key=y" />
          </>
        ) : (
          <>
            <Box key="y" label="key=y" />
            <Box key="x" label="key=x" />
          </>
        )}
        <p className="muted">State follows the key, not the position.</p>
      </div>
    </>
  )
}
