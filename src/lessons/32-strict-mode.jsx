/*
SUMMARY: StrictMode (main.jsx) double-invokes effects in DEV to prove your cleanup is correct. Production runs once.
*/
import { useEffect, useState } from 'react'
import Notes from '../Notes'

export default function Lesson32() {
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log('effect setup', n)
    return () => console.log('effect cleanup', n)
  }, [n])
  return (
    <>
      <Notes
        def="Strict Mode is a development-only wrapper that extra-mounts components and extra-runs effects so missing cleanups show up as doubled logs — not as production bugs."
        pic="A dress rehearsal: run the scene twice to catch leftover mess."
        hook="Dev-only double invoke finds impure effects."
        ideas={['main.jsx wraps the app in <StrictMode>.', 'See setup → cleanup → setup in the console in dev. That’s expected.', 'If a timer still runs after unmount, your cleanup is wrong — Strict Mode is the teacher.']}
        sum="Don’t disable Strict Mode to hide double logs. Fix the effect. Production will run it once."
        tryThis={['Temporarily remove StrictMode and compare logs', 'Leaky setInterval without cleanup', 'Abort a fetch in cleanup']}
        quiz="Q: Is double-mount a production bug? A: No — development check only."
      />
      <div className="demo stack">
        <h2>Strict Mode</h2>
        <p>Open console, click — see setup/cleanup/setup in dev.</p>
        <button type="button" onClick={() => setN((x) => x + 1)}>n={n}</button>
        <p className="muted">main.jsx wraps the app in &lt;StrictMode&gt;.</p>
      </div>
    </>
  )
}
