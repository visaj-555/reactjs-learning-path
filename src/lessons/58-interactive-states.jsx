/*
SUMMARY: Prefix any utility: hover: focus: active: disabled:. Stack them. Focus rings are a11y, not decoration.
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson58() {
  const [off, setOff] = useState(false)
  return (
    <>
      <Notes
        def="State variants apply utilities only in a certain interaction: hover:, focus:, active:, disabled:, enabled:. You prefix the same class names you already know."
        pic="Moods — lean in (hover), spotlight (focus), press (active), grayed out (disabled)."
        hook="hover: focus: active: disabled: prefix any utility."
        ideas={['hover:bg-sky-700 active:bg-sky-800.', 'focus:outline-none focus:ring-2 — don’t remove focus without a ring.', 'disabled:opacity-40 disabled:cursor-not-allowed.']}
        sum="Style the feeling, not only the rest state. Keyboard users live in :focus. Never drop the ring without a replacement."
        tryThis={['hover:bg-sky-700 → hover:bg-pink-600', 'hover:scale-105', 'disabled:opacity-20']}
        quiz="Q: Why focus:ring? A: Keyboard users need a visible focus indicator."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Hover, focus, active, disabled</h2>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="rounded-lg bg-sky-600 px-4 py-2 text-sm text-white hover:bg-sky-700 active:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
            hover / focus / active
          </button>
          <button type="button" disabled={off} onClick={() => setOff(true)} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white enabled:hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40">
            {off ? 'disabled' : 'click to disable'}
          </button>
          <input className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-200" placeholder="focus me" />
        </div>
      </div>
    </>
  )
}
