/*
SUMMARY: useId = unique a11y ids. useTransition = mark non-urgent updates. useDeferredValue = lag a value so typing stays smooth.
*/
import { useDeferredValue, useId, useState, useTransition } from 'react'
import Notes from '../Notes'

function heavyFilter(q) {
  const out = []
  for (let i = 0; i < 4000; i++) if (String(i).includes(q)) out.push(i)
  return out
}

export default function Lesson15() {
  const id = useId()
  const [q, setQ] = useState('')
  const deferred = useDeferredValue(q)
  const [isPending, startTransition] = useTransition()
  const [items, setItems] = useState(() => heavyFilter(''))
  return (
    <>
      <Notes
        def="useId() gives a unique id for labels. useTransition() lets you wrap heavy setState as interruptible. useDeferredValue(v) trails v by a frame so urgent UI stays snappy."
        pic="useId = name sticker. Transition = “this can wait.” Deferred = show last good list while the new one cooks."
        hook="Keep typing snappy; defer the heavy list."
        ideas={['htmlFor={id} + input id={id} — no collisions if many instances.', 'startTransition(() => setItems(heavy(v))) — input stays responsive; isPending is true meanwhile.', 'useDeferredValue(q) when you derive expensive UI from a fast-changing value.']}
        sum="Urgent: the keystroke. Non-urgent: the giant list. Mark the heavy work so React can prioritize typing."
        tryThis={['Remove startTransition and compare lag', 'Render deferred in the list header', 'Two fields each with useId']}
        quiz="Q: What is isPending? A: A transition update is in flight — show a soft loading hint."
      />
      <div className="demo stack">
        <h2>useId / useTransition / useDeferredValue</h2>
        <label htmlFor={id}>Filter</label>
        <input id={id} value={q} onChange={(e) => {
          const v = e.target.value
          setQ(v)
          startTransition(() => setItems(heavyFilter(v)))
        }} />
        <p className="muted">{isPending ? 'updating…' : `deferred="${deferred}" matches=${items.length}`}</p>
      </div>
    </>
  )
}
