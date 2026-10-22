/*
SUMMARY: bg-* solids, bg-gradient-to-* + from/via/to, bg-cover/center for images.
*/
import Notes from '../Notes'

export default function Lesson51() {
  return (
    <>
      <Notes
        def="Background utilities paint the box: solid colors, linear gradients (from- via- to-), and image helpers (bg-cover, bg-center)."
        pic="Wallpaper, or a sunrise painted across it."
        hook="bg-*, from- via- to- with bg-gradient-to-*."
        ideas={['bg-gradient-to-r from-sky-500 to-fuchsia-500.', 'via-* is the middle stop.', 'bg-[url(...)] bg-cover bg-center for photos (arbitrary URL).']}
        sum="Solid for chrome. Gradient for heroes. Cover+center for photos. Keep contrast for text on top."
        tryThis={['to-r → to-t', 'Add via-pink-400', 'from-sky-500 → from-orange-400']}
        quiz="Q: Horizontal gradient? A: bg-gradient-to-r from-* to-* (optional via-*)."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Backgrounds & gradients</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="h-24 rounded-xl bg-slate-800" />
          <div className="h-24 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500" />
          <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-700 p-3 text-sm font-medium text-white">to-br</div>
          <div className="flex h-24 items-center justify-center rounded-xl bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400')] bg-cover bg-center text-sm font-semibold text-white drop-shadow">bg-cover</div>
        </div>
      </div>
    </>
  )
}
