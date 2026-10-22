/*
SUMMARY: Suspense is a waiting room for lazy chunks (and later data). Fallback UI here; errors belong in Error Boundaries.
*/
import { Suspense, lazy, useState } from 'react'
import Notes from '../Notes'

const Panel = lazy(() => new Promise((res) => setTimeout(() => res(import('./24-lazy-heavy')), 600)))

export default function Lesson34() {
  const [on, setOn] = useState(false)
  return (
    <>
      <Notes
        def="Suspense lets a parent show fallback UI while a child is not ready (lazy JS today; async data in newer patterns). It does not catch errors."
        pic="A waiting room while a code-split floor of the building loads."
        hook="Declare fallback UI while children suspend."
        ideas={['Place the boundary where a spinner makes sense (page, panel) — not around every button.', 'Nested Suspense = nested fallbacks.', 'Errors → Error Boundary (lesson 38). Loading → Suspense.']}
        sum="Code-split routes/panels. Wrap with Suspense. Keep fallbacks close to the slow part so the rest of the page stays up."
        tryThis={['Nested Suspense', 'Route-level lazy in App', 'startTransition before setOn(true)']}
        quiz="Q: Can Suspense catch errors? A: No — use Error Boundaries for errors."
      />
      <div className="demo stack">
        <h2>Suspense & code splitting</h2>
        <button type="button" onClick={() => setOn(true)}>open panel</button>
        {on && (
          <Suspense fallback={<p>Suspense fallback…</p>}>
            <Panel />
          </Suspense>
        )}
      </div>
    </>
  )
}
