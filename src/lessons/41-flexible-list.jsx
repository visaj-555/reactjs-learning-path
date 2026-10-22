/*
SUMMARY: List owns data+loop; renderItem lets callers paint each row. One List, many looks.
*/
import Notes from '../Notes'

function List({ items, renderItem, empty = 'Nothing here' }) {
  if (!items.length) return <p className="muted">{empty}</p>
  return <ul className="list">{items.map((item, i) => <li key={item.id ?? i}>{renderItem(item, i)}</li>)}</ul>
}

export default function Lesson41() {
  const people = [
    { id: 1, name: 'Ada', role: 'admin' },
    { id: 2, name: 'Lin', role: 'user' },
  ]
  return (
    <>
      <Notes
        def="A flexible list is a reusable component that maps data but delegates item UI to a renderItem function (inversion of control)."
        pic="A blank playlist — you decide how each track row looks."
        hook="renderItem gives callers UI control."
        ideas={['List does keys, empty state, ul. Callers pass renderItem={(p) => …}.', 'Same data, two presentations below — that’s the point.', 'Tables: renderCell. Menus: renderOption. Same idea.']}
        sum="Generic containers + render functions = one component, infinite skins. Don’t hardcode <li>{item.name}</li> inside a “reusable” List."
        tryThis={['empty="No people"', 'keyExtractor={p => p.id}', 'Table with renderCell']}
        quiz="Q: Why renderItem? A: Keeps List reusable without hardcoding item markup."
      />
      <div className="demo stack">
        <h2>Flexible List (renderItem)</h2>
        <List items={people} renderItem={(p) => <span className="row"><strong>{p.name}</strong><span className="tag">{p.role}</span></span>} />
        <List items={people} renderItem={(p) => `#${p.id} ${p.name}`} />
      </div>
    </>
  )
}
