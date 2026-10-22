/*
SUMMARY: Custom hooks extract reusable stateful logic. Name must start with use. Each call has its own state.
*/
import { useEffect, useState } from 'react'
import Notes from '../Notes'

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key)) ?? initial } catch { return initial }
  })
  useEffect(() => { localStorage.setItem(key, JSON.stringify(value)) }, [key, value])
  return [value, setValue]
}

function useToggle(initial = false) {
  const [on, setOn] = useState(initial)
  return [on, () => setOn((v) => !v)]
}

export default function Lesson13() {
  const [name, setName] = useLocalStorage('learn-name', 'Ada')
  const [on, toggle] = useToggle(true)
  return (
    <>
      <Notes
        def="A custom hook is a function whose name starts with use and that calls other hooks. It shares logic, not UI."
        pic="A reusable recipe card made from pantry staples (the built-in hooks)."
        hook="If it starts with use, it can call hooks."
        ideas={['Extract: useLocalStorage, useFetch, useToggle — return data + setters.', 'Each component call gets fresh state. Hooks never share memory between callers.', 'Keep JSX in components; keep behavior in hooks.']}
        sum="Copy-paste of useState+useEffect → a named hook. Compose hooks. Don’t use them to share one global value (that’s context/store)."
        tryThis={['useFetch(url) stub', 'useOnlineStatus()', 'Call two custom hooks in one component']}
        quiz="Q: Do two components sharing useLocalStorage share state? A: Only if they use the same key in storage — each hook call still has its own React state."
      />
      <div className="demo stack">
        <h2>Custom hooks</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p className="muted">persisted in localStorage</p>
        <button type="button" onClick={toggle}>{on ? 'ON' : 'OFF'}</button>
      </div>
    </>
  )
}
