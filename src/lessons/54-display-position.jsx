/*
SUMMARY: display = how boxes participate (flex/grid/hidden). position = where (relative parent, absolute child, sticky).
*/
import Notes from '../Notes'

export default function Lesson54() {
  return (
    <>
      <Notes
        def="Display utilities choose the layout mode (block, flex, grid, hidden). Position utilities pin elements: relative, absolute, fixed, sticky + inset/top/left."
        pic="How boxes stand in line vs sticky notes pinned on a wall."
        hook="block/flex/grid/hidden + relative/absolute/fixed/sticky."
        ideas={['relative parent creates the containing block for absolute children.', 'sticky top-0 stays while its ancestor scrolls (needs overflow).', 'hidden vs md:block is how responsive navs work.']}
        sum="Pick a display. Pin with position. Absolute is relative to the nearest positioned ancestor — usually you add relative on purpose."
        tryThis={['absolute → fixed (watch the viewport)', 'hidden on a badge', 'sticky top-0 → top-4']}
        quiz="Q: relative vs absolute? A: absolute is placed against the nearest positioned ancestor (often relative)."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Display & position</h2>
        <div className="relative mb-3 h-32 rounded-lg bg-slate-100">
          <span className="absolute top-2 left-2 rounded bg-sky-600 px-2 py-1 text-xs text-white">absolute</span>
          <span className="absolute right-2 bottom-2 rounded bg-emerald-600 px-2 py-1 text-xs text-white">bottom-right</span>
          <span className="flex h-full items-center justify-center text-sm text-slate-500">relative parent</span>
        </div>
        <div className="h-24 overflow-auto rounded-lg border border-slate-200">
          <div className="sticky top-0 bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">sticky header — scroll</div>
          <div className="space-y-2 p-3 text-sm text-slate-600">
            <p>Line 1</p><p>Line 2</p><p>Line 3</p><p>Line 4</p><p>Line 5</p>
          </div>
        </div>
      </div>
    </>
  )
}
