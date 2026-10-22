/*
SUMMARY: Components = reusable UI functions. Props = read-only inputs from parent.
Demo: UserCard receives name/role and renders Badge.
*/
import Notes from '../Notes'

function Badge({ label, tone = 'ok' }) {
  // tone has a default so callers can omit it
  return <span className="tag" style={{ color: tone === 'ok' ? 'var(--ok)' : 'var(--err)' }}>{label}</span>
}

function UserCard({ name, role }) {
  return (
    <div className="row" style={{ border: '1px solid var(--border)', padding: '0.5rem', borderRadius: 8 }}>
      <strong>{name}</strong>
      <Badge label={role} />
    </div>
  )
}

export default function Lesson02() {
  return (
    <>
      <Notes
        def="A component is a function that returns UI. Props are the arguments the parent passes in — a read-only object."
        pic="Cookie cutters (components) and dough flavors (props)."
        hook="Props flow down like gifts."
        ideas={['function Name(props) or destructure { name, role }.', 'Never mutate props — parent owns that data.', 'Defaults: role = "guest" (param default) so missing props still work.']}
        sum="Split UI into named functions. Pass data down as props. Children cannot change props; they ask the parent via callbacks."
        tryThis={['Add an age prop', 'Default role to "guest"', 'Pass boolean isOnline and show a dot']}
        quiz="Q: Can a child change props? A: No. Lift state up or pass an onChange callback."
      />
      <div className="demo stack">
        <h2>Components & props</h2>
        <UserCard name="Ada" role="admin" />
        <UserCard name="Lin" role="user" />
      </div>
    </>
  )
}
