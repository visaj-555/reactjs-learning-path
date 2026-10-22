/*
SUMMARY: Context = inject a value down a tree (all consumers re-render). Zustand = external store with selectors (only chosen slices re-render).
*/
import { createContext, useContext, useState } from 'react'
import { create } from 'zustand'
import Notes from '../Notes'

const CountCtx = createContext(null)
const useBear = create((set) => ({
  bears: 0,
  add: () => set((s) => ({ bears: s.bears + 1 })),
}))

function CtxChild() {
  const { n } = useContext(CountCtx)
  return <p>Context count: {n}</p>
}
function ZustandChild() {
  const bears = useBear((s) => s.bears) // only this slice
  return <p>Zustand bears: {bears}</p>
}

export default function Lesson26() {
  const [n, setN] = useState(0)
  const add = useBear((s) => s.add)
  return (
    <>
      <Notes
        def="Context is React’s built-in dependency injection. Zustand is a tiny global store: components pick slices with selectors and skip unrelated updates."
        pic="Context = house intercom. Zustand = a pocket notebook anyone can open to one page."
        hook="Context for tree DI; Zustand for selective external store."
        ideas={['Context: wrap a tree, useContext. Fine for theme/auth. Heavy if value is a new object each render.', 'Zustand: create((set)=>({...})); useBear(s => s.bears). No provider required.', 'Redux (next lesson) is the same idea with more structure for large apps.']}
        sum="Theme/auth → context is enough. Frequent, selective client state → Zustand. Huge teams/devtools/time-travel → Redux Toolkit."
        tryThis={['zustand persist middleware', 'Split context into StateCtx + DispatchCtx', 'Select only add in a child']}
        quiz="Q: Why selectors? A: The component re-renders only if the selected data changed."
      />
      <div className="demo stack">
        <h2>Context vs Zustand</h2>
        <CountCtx.Provider value={{ n }}>
          <CtxChild />
          <button type="button" onClick={() => setN((x) => x + 1)}>context++</button>
        </CountCtx.Provider>
        <ZustandChild />
        <button type="button" className="secondary" onClick={add}>zustand++</button>
      </div>
    </>
  )
}
