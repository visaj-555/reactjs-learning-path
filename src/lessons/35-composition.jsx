/*
SUMMARY: Build UI from small pieces + children slots instead of one mega component with 20 props. React does not use inheritance for views.
*/
import Notes from '../Notes'

function Card({ children }) {
  return <div style={{ border: '1px solid var(--border)', borderRadius: 10, padding: 12 }}>{children}</div>
}
function CardHeader({ children }) { return <header style={{ fontWeight: 600, marginBottom: 8 }}>{children}</header> }
function CardBody({ children }) { return <div>{children}</div> }

export default function Lesson35() {
  return (
    <>
      <Notes
        def="Composition means combining small components (often via children) to make bigger UI. Prefer this over inheritance or a single component with every possible prop."
        pic="A sandwich: wrappers are bread, filling is children."
        hook="Prefer compose over inherit / prop-soup."
        ideas={['Card + CardHeader + CardBody: caller decides structure.', 'Containment = children slot. Specialization = a thin wrapper (AdminCard) around Card.', 'If you’re passing 8 optional render flags, split components instead.']}
        sum="Open slots, small pieces. The parent paints the inside; the child owns the chrome."
        tryThis={['Add CardFooter', 'AdminCard wrapping Card', 'Replace title/body props with children']}
        quiz="Q: Composition vs inheritance in React? A: React favors composition — don’t extend UI classes."
      />
      <div className="demo stack">
        <h2>Composition</h2>
        <Card>
          <CardHeader>Profile</CardHeader>
          <CardBody>
            <p>Compose pieces instead of &lt;Card title body footer /&gt; mega-props.</p>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
