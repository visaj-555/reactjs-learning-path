/*
SUMMARY: border = layout stroke. rounded = corners. ring = box-shadow halo. divide-y = lines between kids.
*/
import Notes from '../Notes'

export default function Lesson52() {
  return (
    <>
      <Notes
        def="Border utilities draw edges. rounded-* clips corners. ring-* is an outline via box-shadow (doesn’t change size). divide-y/x draws lines between children."
        pic="Picture frames (border), soft halos (ring), grocery-list lines (divide)."
        hook="border-* frame, rounded-* corners, ring-* glow, divide-* gutters."
        ideas={['border, border-2, border-dashed + border-sky-500.', 'rounded-md / 2xl / full (pills).', 'ring-2 ring-offset-2 for focus — doesn’t shove layout.']}
        sum="Stroke with border. Soft focus with ring. Lists with divide. Match radius to the component’s size."
        tryThis={['rounded-2xl → rounded-none', 'ring-2 → ring-4', 'divide-y → divide-x on a flex row']}
        quiz="Q: ring vs border? A: ring is a shadow outline (no layout); border takes space."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Borders, rounded, ring, divide</h2>
        <div className="mb-4 flex flex-wrap gap-3">
          <div className="rounded-md border border-slate-300 px-3 py-2 text-sm">border</div>
          <div className="rounded-2xl border-2 border-sky-500 px-3 py-2 text-sm">rounded-2xl</div>
          <div className="rounded-full border border-dashed border-emerald-500 px-4 py-2 text-sm">dashed</div>
          <button type="button" className="rounded-lg bg-white px-3 py-2 text-sm text-slate-800 ring-2 ring-sky-400 ring-offset-2">ring</button>
        </div>
        <ul className="divide-y divide-slate-200 rounded-lg border border-slate-200">
          <li className="px-3 py-2 text-sm">Item A</li>
          <li className="px-3 py-2 text-sm">Item B</li>
          <li className="px-3 py-2 text-sm">Item C</li>
        </ul>
      </div>
    </>
  )
}
