/*
SUMMARY: Siblings that must stay in sync share state in the nearest parent. Pass value down + onChange up.
*/
import { useState } from 'react'
import Notes from '../Notes'

function Celsius({ c, onChange }) {
  return <label>°C <input type="number" value={c} onChange={(e) => onChange(Number(e.target.value))} /></label>
}
function Fahrenheit({ c, onChange }) {
  const f = (c * 9) / 5 + 32
  return <label>°F <input type="number" value={Number.isFinite(f) ? f.toFixed(1) : ''} onChange={(e) => onChange(((Number(e.target.value) - 32) * 5) / 9)} /></label>
}

export default function Lesson25() {
  const [c, setC] = useState(20) // single source of truth for both inputs
  return (
    <>
      <Notes
        def="Lifting state up means moving shared data to the closest common parent so siblings stay in sync via props."
        pic="One thermostat upstairs — every room reads the same temperature."
        hook="State lives in the closest common parent."
        ideas={['If two children need the same value, the parent owns it.', 'Pass c and onChange={setC}. Name callbacks onX.', 'Don’t lift everything — keep state as low as you can until it must be shared.']}
        sum="Share → lift. Local → leave it. Parent holds the truth; children are controlled."
        tryThis={['Add Kelvin', 'Shared filter for two lists', 'Rename onChange to onCelsiusChange']}
        quiz="Q: Where should shared state live? A: The nearest common ancestor of the consumers."
      />
      <div className="demo stack">
        <h2>Lifting state up</h2>
        <div className="row">
          <Celsius c={c} onChange={setC} />
          <Fahrenheit c={c} onChange={setC} />
        </div>
      </div>
    </>
  )
}
