/*
SUMMARY: grid grid-cols-N + gap. Children: col-span / row-span. place-items centers in cells. Responsive: sm:grid-cols-*.
*/
import Notes from '../Notes'

export default function Lesson56() {
  return (
    <>
      <Notes
        def="Grid utilities create rows and columns. grid-cols-3 makes three equal tracks; col-span-2 makes a child occupy two. gap is the gutter."
        pic="An egg carton — assigned cells, some eggs taking two slots."
        hook="grid grid-cols-* + col-span-* + gap-*."
        ideas={['12-column grids: grid-cols-12 + col-span-4.', 'sm:grid-cols-2 lg:grid-cols-4 = mobile-first cards.', 'place-items-center centers content in every cell.']}
        sum="2D layout = grid. Spans for heroes. Change cols at breakpoints instead of fighting flex-wrap."
        tryThis={['grid-cols-3 → 2', 'Add row-span-2', 'gap-2 → gap-4']}
        quiz="Q: Span two columns? A: col-span-2 on the child."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Grid utilities</h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 rounded-lg bg-violet-500 p-4 text-xs text-white">col-span-2</div>
          <div className="rounded-lg bg-violet-400 p-4 text-xs text-white">1</div>
          <div className="rounded-lg bg-violet-400 p-4 text-xs text-white">2</div>
          <div className="col-span-2 rounded-lg bg-violet-600 p-4 text-xs text-white">col-span-2</div>
        </div>
        <div className="mt-3 grid grid-cols-2 place-items-center gap-2 rounded-lg bg-slate-50 p-3 sm:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="size-10 rounded-full bg-slate-300 text-center text-xs leading-10">{n}</div>
          ))}
        </div>
      </div>
    </>
  )
}
