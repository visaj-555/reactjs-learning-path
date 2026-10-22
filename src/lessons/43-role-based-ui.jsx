/*
SUMMARY: Can hides children unless role is in allow[]. UX only — the server must still authorize.
*/
import { useState } from 'react'
import Notes from '../Notes'

function Can({ role, allow, children }) {
  return allow.includes(role) ? children : null
}

export default function Lesson43() {
  const [role, setRole] = useState('user')
  return (
    <>
      <Notes
        def="Role-based UI shows or hides controls from the user’s role (admin vs user). It is convenience, not security — every mutation still needs a server check."
        pic="A theme park: staff doors vs guest paths."
        hook="Same page, different controls by role."
        ideas={['<Can role={role} allow={["admin"]}> wraps dangerous buttons.', 'Sometimes disable instead of hide so users know the feature exists.', 'Permissions (todos:delete) scale better than a single role string.']}
        sum="Centralize Can/RequireRole. Hide in the UI. Enforce on the API. Never only hide."
        tryThis={['Permission strings', 'Disable instead of hide', 'Layout-level admin gate']}
        quiz="Q: Is hiding UI enough security? A: No — the server must authorize every action."
      />
      <div className="demo stack">
        <h2>Role-based UI</h2>
        <div className="row">
          <button type="button" className={role === 'user' ? '' : 'secondary'} onClick={() => setRole('user')}>user</button>
          <button type="button" className={role === 'admin' ? '' : 'secondary'} onClick={() => setRole('admin')}>admin</button>
        </div>
        <p>Signed in as <span className="tag">{role}</span></p>
        <Can role={role} allow={['user', 'admin']}><p>Everyone sees the feed.</p></Can>
        <Can role={role} allow={['admin']}><button type="button">Delete all users</button></Can>
      </div>
    </>
  )
}
