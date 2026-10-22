/*
SUMMARY: useState is component memory. setState queues a re-render with a new value. Copy objects, don't mutate.
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson07() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: 'Ada', clicks: 0 })
  return (
    <>
      <Notes
        def="useState(initial) returns [value, setter]. Calling the setter tells React to re-render this component with the new value."
        pic="A sticky note on the fridge — React remembers it after every paint."
        hook="setState schedules a re-render with new memory."
        ideas={['setCount(c => c+1) is safer than setCount(count+1) when updates stack.', 'State updates are async/batched — reading count right after setCount still shows the old value.', 'Objects/arrays: replace with a copy { ...u, clicks: u.clicks+1 }. Mutating in place may skip the render.']}
        sum="State is memory. Setters queue renders. Functional updates for “based on previous”. Never mutate; spread/copy."
        tryThis={['Lazy init: useState(() => heavy())', 'Toggle a boolean', 'Push to an array: setItems(xs => [...xs, x])']}
        quiz="Q: Why spread objects? A: React uses Object.is. Same reference → it may skip re-render."
      />
      <div className="demo stack">
        <h2>useState</h2>
        <div className="row">
          <button type="button" onClick={() => setCount((c) => c + 1)}>+ {count}</button>
          <button type="button" className="secondary" onClick={() => setCount(0)}>reset</button>
        </div>
        <p>{user.name} clicks: {user.clicks}</p>
        <button type="button" onClick={() => setUser((u) => ({ ...u, clicks: u.clicks + 1 }))}>bump user (immutable)</button>
      </div>
    </>
  )
}
