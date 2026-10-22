/*
SUMMARY: Render arrays with map(). key is the item's identity so React can match rows after add/remove/reorder.
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson04() {
  const [items, setItems] = useState([
    { id: 'a', text: 'Milk' },
    { id: 'b', text: 'Eggs' },
    { id: 'c', text: 'Bread' },
  ])
  return (
    <>
      <Notes
        def="A list in React is an array mapped to elements. Each element needs a stable key so React knows which item is which."
        pic="Name tags on coats — swap hangers and the right coat stays with the right tag."
        hook="Key = identity, not index (when order can change)."
        ideas={['items.map(it => <li key={it.id}>...)', 'Prefer a unique id from data. Index keys break when you prepend/sort.', 'key is not a prop you read — it is for React’s reconciler.']}
        sum="map → UI. Stable keys preserve row state. Index is OK only for static never-reordered lists."
        tryThis={['Sort A→Z', 'Temporarily use index as key, prepend, watch input state jump', 'Add inline edit per row']}
        quiz="Q: Why not always use index? A: Reorders make state stick to the wrong rows."
      />
      <div className="demo">
        <h2>Lists & keys</h2>
        <ul className="list">
          {items.map((it) => (
            <li key={it.id} className="row">
              {it.text}
              <button type="button" className="secondary" onClick={() => setItems((xs) => xs.filter((x) => x.id !== it.id))}>remove</button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={() => setItems((xs) => [{ id: crypto.randomUUID(), text: 'New' }, ...xs])}>prepend</button>
      </div>
    </>
  )
}
