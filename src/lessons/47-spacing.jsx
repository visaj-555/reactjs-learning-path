/*
SUMMARY: p/px/py/pt = padding (inside). m/mx/mt = margin (outside). gap on flex/grid. space-y on stacked siblings.
*/
import Notes from '../Notes'

export default function Lesson47() {
  return (
    <>
      <Notes
        def="Spacing utilities set padding, margin, and gaps using a 4px-based scale (1 = 0.25rem). p = inside, m = outside, gap = between flex/grid children."
        pic="Air between furniture — cushions inside the sofa (padding), walking room between sofas (margin/gap)."
        hook="p = inner cushion, m = outer gap, gap = flex/grid gutters."
        ideas={['p-4 all sides; px-3 py-2 axis; pt-1 one side.', 'space-y-2 adds margin between stacked children (not after the last).', 'Prefer gap on flex/grid over sibling margins.']}
        sum="Inside = p. Outside = m. Between items in a flex/grid = gap. Stick to the scale unless you need arbitrary values (lesson 63)."
        tryThis={['p-4 → p-8', 'flex gap-3 → space-x-6', 'mx-auto w-fit']}
        quiz="Q: gap vs space-x? A: gap is for flex/grid; space-x adds margin between children except the last."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Spacing</h2>
        <div className="mb-4 space-y-2 rounded-md bg-slate-100 p-4">
          <div className="bg-white p-2 text-sm">p-2 inside</div>
          <div className="mt-4 bg-white p-4 text-sm">mt-4 + p-4</div>
        </div>
        <div className="flex gap-3">
          <div className="rounded bg-sky-500 px-3 py-2 text-xs text-white">gap-3</div>
          <div className="rounded bg-sky-500 px-3 py-2 text-xs text-white">a</div>
          <div className="rounded bg-sky-500 px-3 py-2 text-xs text-white">b</div>
        </div>
      </div>
    </>
  )
}
