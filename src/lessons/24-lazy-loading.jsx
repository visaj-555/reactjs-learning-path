/*
SUMMARY: lazy(() => import(chunk)) code-splits. Suspense shows fallback until the promise resolves.
*/
import { Suspense, lazy, useState } from 'react'
import Notes from '../Notes'

const Heavy = lazy(() => import('./24-lazy-heavy')) // separate JS file, loaded on demand

export default function Lesson24() {
  const [show, setShow] = useState(false)
  return (
    <>
      <Notes
        def="Lazy loading means the browser downloads a component’s JS only when needed. React.lazy + Suspense is the built-in way."
        pic="Pack a suitcase — bring the outfit when you need it, not at the airport."
        hook="lazy() + Suspense = code-split on demand."
        ideas={['lazy(() => import("./X")) returns a component that suspends until the chunk loads.', 'Wrap it in <Suspense fallback={…}> or the tree errors.', 'Great for routes and heavy panels, not for tiny buttons.']}
        sum="Split by route/feature. Show a fallback. Prefetch on hover if the click is likely. Pair with an error boundary."
        tryThis={['Lazy a route element', 'Prefetch: onMouseEnter={() => import(...)}', 'Error boundary around Suspense']}
        quiz="Q: What does Suspense wait for? A: The lazy import promise (and any other suspended reads)."
      />
      <div className="demo stack">
        <h2>Lazy loading</h2>
        <button type="button" onClick={() => setShow(true)}>load chunk</button>
        {show && (
          <Suspense fallback={<p>Loading chunk…</p>}>
            <Heavy />
          </Suspense>
        )}
      </div>
    </>
  )
}
