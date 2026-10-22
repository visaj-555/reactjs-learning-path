/*
SUMMARY: overflow-hidden clips; auto/scroll make a pane. z-* paints later (on top) inside a stacking context — position helps.
*/
import Notes from '../Notes'

export default function Lesson57() {
  return (
    <>
      <Notes
        def="Overflow utilities clip or scroll extra content. z-index utilities (z-0, z-10, z-50) control paint order: higher numbers draw on top when elements overlap."
        pic="A window shade (overflow) and a stack of papers (z-index)."
        hook="overflow-hidden/auto/scroll · z-10 above z-0."
        ideas={['overflow-hidden for rounded image crops and dropdowns.', 'overflow-auto + max-height = internal scroll.', 'z-index works with positioned/flex/grid items; the stacking context matters.']}
        sum="Clip or scroll. Raise dropdowns/modals with z-50. Don’t invent z-9999 — pick a small scale."
        tryThis={['overflow-hidden → overflow-auto + h-20', 'Swap z-0 / z-10', 'Add a z-20 badge']}
        quiz="Q: When does z-index apply? A: In a stacking context — usually on positioned/flex/grid children."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Overflow & z-index</h2>
        <div className="mb-3 h-20 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-2 text-sm text-slate-600">
          overflow-hidden clips this very long sentence so you never see the rest of the text that continues far beyond the box.
        </div>
        <div className="relative h-28 rounded-lg bg-slate-100">
          <div className="absolute top-4 left-4 z-0 size-16 rounded-lg bg-sky-300 shadow" />
          <div className="absolute top-8 left-10 z-10 flex size-16 items-center justify-center rounded-lg bg-sky-600 text-xs text-white shadow-lg">z-10</div>
        </div>
      </div>
    </>
  )
}
