/*
SUMMARY: children = whatever you nest between a component's tags. Used for layout wrappers.
Demo: Panel renders title + whatever is inside it.
*/
import Notes from '../Notes'

function Panel({ title, children }) {
  return (
    <section style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '0.75rem' }}>
      <h3 style={{ margin: '0 0 0.5rem' }}>{title}</h3>
      {children /* slot: parent decides the inside */}
    </section>
  )
}

export default function Lesson03() {
  return (
    <>
      <Notes
        def="children is a special prop: the JSX you put between a component's opening and closing tags."
        pic="A gift box (wrapper) and whatever you put inside."
        hook="children = what's between the tags."
        ideas={['Destructure { children } and place it where the slot should render.', 'Wrappers (Layout, Card, Modal) should take children, not 20 config props.', 'You can also pass children={...} explicitly — same prop.']}
        sum="Compose UI by nesting. Parents fill the hole; wrappers own the chrome (title, border, padding)."
        tryThis={['Nest Panel inside Panel', 'Pass children as an explicit prop', 'Conditionally render children']}
        quiz="Q: How do you access nested content? A: props.children (or destructure children)."
      />
      <div className="demo stack">
        <h2>children</h2>
        <Panel title="Notes">
          <p>Any JSX can be children.</p>
          <button type="button">Inside panel</button>
        </Panel>
      </div>
    </>
  )
}
