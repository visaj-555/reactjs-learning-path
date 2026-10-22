/*
SUMMARY: Show/hide UI from data: early return, && (optional), ternary (either/or).
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson05() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [role, setRole] = useState('user')
  return (
    <>
      <Notes
        def="Conditional rendering means the UI tree changes based on values — login, role, loading — using JS, not a template if-tag."
        pic="Traffic lights: only one path is green."
        hook="&& for optional, ternary for either/or."
        ideas={['if (!ok) return <Login/> — gate a whole screen.', '{cond && <X/>} shows X or nothing (watch out: 0 && … renders 0).', '{a ? <A/> : <B/>} picks one of two. Nested ternaries get messy — extract.']}
        sum="Branch in JS. Early return for screens. && for extras. Ternary for A vs B. Prefer small components over nested soup."
        tryThis={['Add a loading state', 'Switch on a status enum', 'Return null to hide a button']}
        quiz="Q: && vs ternary? A: && show/hide one thing; ternary chooses between two."
      />
      {!loggedIn ? (
        <div className="demo stack">
          <h2>Conditional rendering</h2>
          <p>Please log in.</p>
          <button type="button" onClick={() => setLoggedIn(true)}>Login</button>
        </div>
      ) : (
        <div className="demo stack">
          <h2>Conditional rendering</h2>
          <p className="ok">Welcome!</p>
          {role === 'admin' && <p className="tag">Admin toolbar</p>}
          <p>{role === 'admin' ? 'Full access' : 'Limited access'}</p>
          <div className="row">
            <button type="button" className="secondary" onClick={() => setRole((r) => (r === 'admin' ? 'user' : 'admin'))}>toggle role</button>
            <button type="button" onClick={() => setLoggedIn(false)}>logout</button>
          </div>
        </div>
      )}
    </>
  )
}
