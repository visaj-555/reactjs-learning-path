/*
SUMMARY: useRef holds a mutable box that survives renders without causing them. Also points at DOM nodes.
*/
import { useRef, useState } from 'react'
import Notes from '../Notes'

export default function Lesson09() {
  const inputRef = useRef(null) // will hold the <input> DOM node
  const renders = useRef(0)     // mutable counter, no re-render
  const [n, setN] = useState(0)
  renders.current += 1
  return (
    <>
      <Notes
        def="useRef(initial) returns { current: initial }. Changing current does not re-render. Putting ref={r} on a tag stores the DOM node in r.current."
        pic="A backpack pocket: stuff stays put; opening it doesn’t redraw the room."
        hook="ref.current mutates quietly; also holds DOM nodes."
        ideas={['DOM: inputRef.current.focus() after click — not during render.', 'Store previous values, timer ids, abort controllers — anything that isn’t UI.', 'Don’t use refs as a substitute for state if the screen must update.']}
        sum="Refs = mutable memory without paint. State = memory that paints. Use refs for DOM and “I need to remember but not show.”"
        tryThis={['Keep previous n in a ref', 'el.scrollIntoView()', 'Save setInterval id in a ref and clear it']}
        quiz="Q: Does updating ref.current re-render? A: No — that’s the point."
      />
      <div className="demo stack">
        <h2>useRef</h2>
        <p className="muted">Render count (via ref): {renders.current}</p>
        <div className="row">
          <input ref={inputRef} placeholder="focus me" />
          <button type="button" onClick={() => inputRef.current?.focus()}>focus</button>
          <button type="button" className="secondary" onClick={() => setN((x) => x + 1)}>re-render {n}</button>
        </div>
      </div>
    </>
  )
}
