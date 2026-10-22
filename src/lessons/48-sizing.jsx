/*
SUMMARY: w/h set size. min/max are limits. size-N sets width+height together. Fractions and max-w-xs are common.
*/
import Notes from '../Notes'

export default function Lesson48() {
  return (
    <>
      <Notes
        def="Sizing utilities control width and height: w-full, h-16, max-w-xs, min-h-12. size-10 sets both axes to the same value (a square/circle)."
        pic="Packing boxes and a tape measure for min/max."
        hook="w/h set size; min/max set limits; size sets both."
        ideas={['w-1/2, w-full, w-screen, max-w-md for readable measure.', 'size-10 = 2.5rem square — great for avatars.', 'min-w-0 on flex children lets them shrink/truncate.']}
        sum="Set the box. Cap it with max-*. Floor it with min-*. size-* when both axes match."
        tryThis={['size-10 → size-16', 'max-w-xs → max-w-md', 'Add min-w-40']}
        quiz="Q: What does size-12 do? A: Width and height both 3rem (12 × 0.25rem)."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Sizing</h2>
        <div className="mb-3 flex h-16 w-full max-w-xs items-center justify-center rounded-lg bg-indigo-500 text-sm text-white">w-full max-w-xs h-16</div>
        <div className="flex items-end gap-2">
          <div className="size-10 rounded-full bg-emerald-400" />
          <div className="size-14 rounded-full bg-emerald-500" />
          <div className="h-20 min-h-12 w-24 max-w-full rounded-md bg-emerald-600" />
        </div>
      </div>
    </>
  )
}
