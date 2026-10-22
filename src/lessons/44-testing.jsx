/*
SUMMARY: Vitest + Testing Library: render UI, find by role, click, assert what the user sees. Test file: 44-testing.test.jsx
*/
import { useState } from 'react'
import Notes from '../Notes'

export function Counter() {
  const [n, setN] = useState(0)
  return (
    <div>
      <p>Count: {n}</p>
      <button type="button" onClick={() => setN((x) => x + 1)}>Increment</button>
    </div>
  )
}

export default function Lesson44() {
  return (
    <>
      <Notes
        def="Component tests render the real UI in a fake DOM (jsdom), query it like a user (getByRole), interact (userEvent), and assert visible outcomes."
        pic="A fire drill — practice using the UI before production smoke."
        hook="Render → query → interact → assert."
        ideas={['npm test runs Vitest. See 44-testing.test.jsx.', 'getByRole("button", { name: /increment/i }) beats getByTestId for a11y.', 'Don’t assert internals (state, class names) unless that’s the contract.']}
        sum="Test behavior. Query how users (and screen readers) find things. Keep tests close to the component."
        tryThis={['Assert disabled', 'findBy for async text', 'npm test -- --coverage']}
        quiz="Q: Why getByRole? A: It matches accessibility and how people find controls."
      />
      <div className="demo stack">
        <h2>Vitest + RTL</h2>
        <p className="muted">Run: <code>npm test</code> · see <code>44-testing.test.jsx</code></p>
        <Counter />
      </div>
    </>
  )
}
