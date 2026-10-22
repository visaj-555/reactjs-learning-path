/*
SUMMARY: useEffect runs after paint to sync with the outside world (timers, title, fetch). Always return cleanup.
*/
import { useEffect, useState } from 'react'
import Notes from '../Notes'

export default function Lesson08() {
  const [sec, setSec] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    if (!on) return
    const id = setInterval(() => setSec((s) => s + 1), 1000)
    return () => clearInterval(id) // cleanup: no leaked timers
  }, [on])
  useEffect(() => {
    document.title = `Tick ${sec}`
    return () => { document.title = 'React Lifetime Path' }
  }, [sec])
  return (
    <>
      <Notes
        def="useEffect(fn, deps) runs fn after the browser paints. Use it to sync React with timers, DOM, network — not to compute render values."
        pic="A side-quest after the main scene is on stage."
        hook="Effects for syncing, not for deriving data."
        ideas={['[] = run on mount (and Strict Mode remount in dev). [on] = re-run when on changes.', 'Return a cleanup function — it runs before the next effect and on unmount.', 'If you can compute it during render, don’t put it in an effect.']}
        sum="After paint → talk to the world. List deps honestly. Clean up intervals/listeners/aborts so nothing leaks."
        tryThis={['Fetch on mount with cleanup flag', 'Debounce an input in an effect', 'console.log in cleanup to see it fire']}
        quiz="Q: When does cleanup run? A: Before the next effect (deps change) and on unmount."
      />
      <div className="demo stack">
        <h2>useEffect</h2>
        <p>Seconds: {sec}</p>
        <button type="button" onClick={() => setOn((v) => !v)}>{on ? 'pause' : 'resume'}</button>
      </div>
    </>
  )
}
