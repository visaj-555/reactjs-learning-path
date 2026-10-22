/*
SUMMARY: flex row by default. justify = main axis, items = cross axis. flex-1 grows. gap between.
*/
import Notes from '../Notes'

export default function Lesson55() {
  return (
    <>
      <Notes
        def="Flexbox utilities turn a container into a flex formatting context: children sit in a row or column, aligned with justify-* (main axis) and items-* (cross axis)."
        pic="Train cars you can align, reverse, and wrap."
        hook="flex + justify-* + items-* + grow/shrink/basis."
        ideas={['flex items-center justify-between = navbar.', 'flex-wrap lets chips wrap; nowrap overflows.', 'flex-1 = grow to fill leftover space.']}
        sum="Navbars, toolbars, even distribution. If you need 2D alignment (rows AND columns), use grid (next)."
        tryThis={['justify-between → justify-center', 'flex-wrap → flex-nowrap', 'flex-col on the top bar']}
        quiz="Q: items-center vs justify-center? A: items = cross axis; justify = main axis."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Flexbox utilities</h2>
        <div className="mb-3 flex items-center justify-between gap-2 rounded-lg bg-slate-50 p-3">
          <span className="text-sm font-medium">Logo</span>
          <div className="flex gap-2">
            <span className="rounded bg-slate-200 px-2 py-1 text-xs">Nav</span>
            <span className="rounded bg-sky-600 px-2 py-1 text-xs text-white">CTA</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="flex-1 rounded-md bg-indigo-500 p-3 text-center text-xs text-white">flex-1</div>
          <div className="w-20 rounded-md bg-indigo-400 p-3 text-center text-xs text-white">fixed</div>
          <div className="flex-1 rounded-md bg-indigo-500 p-3 text-center text-xs text-white">flex-1</div>
        </div>
      </div>
    </>
  )
}
