/*
SUMMARY: This file teaches JSX — HTML-looking tags in JS that compile to function calls.
Demo: embed {name} and {2+2}, className, style object, onClick.
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson01() {
  const name = 'React' // JS value → shown via { }
  const [n, setN] = useState(2)
  return (
    <>
      <Notes
        def="JSX is a syntax extension: you write HTML-like tags in JavaScript; the compiler turns them into React elements."
        pic="LEGO bricks that look like HTML but snap into JavaScript."
        hook="Looks like HTML, lives in JS."
        ideas={['Compiles to jsx() / createElement — not a string of HTML.', '{ } embeds any JS expression (values, math, ternaries).', 'Attrs are camelCase: className, onClick, htmlFor. style is an object.']}
        sum="Write UI as tags. Put data in { }. Use className, not class. One parent (or <>fragment</>) per return."
        tryThis={['Embed {["a","b"].join(" · ")}', 'Ternary greeting: {n > 5 ? "hot" : "cool"}', 'Store a className string in a variable']}
        quiz="Q: Why className, not class? A: class is a reserved word in JavaScript."
      />
      <div className="demo">
        <h2>JSX live</h2>
        <p>Hello, <strong>{name}</strong>! 2+2={2 + 2}</p>
        <p className="muted">className, not class. Style is an object.</p>
        <div className="row">
          <button type="button" onClick={() => setN((x) => x + 1)}>n = {n}</button>
          <span style={{ color: n > 5 ? 'crimson' : 'teal' }}>dynamic style</span>
        </div>
      </div>
    </>
  )
}
