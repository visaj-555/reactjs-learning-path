/*
SUMMARY: group on parent → group-hover:* on kids. peer on an input → peer-checked:* on later siblings.
*/
import Notes from '../Notes'

export default function Lesson59() {
  return (
    <>
      <Notes
        def="group and peer are named variants that style one element based on another: group = parent→children, peer = earlier sibling→later sibling (like a checkbox + label)."
        pic="group is a coach; peer is a sibling tipping you off."
        hook="group-hover on parent · peer-checked/peer-focus on sibling."
        ideas={['Add group on the card; children use group-hover:text-sky-700.', 'peer on the checkbox; the span uses peer-checked:font-semibold.', 'Named groups (group/nav) exist when you nest groups.']}
        sum="Parent hover? group. Checkbox state affecting a neighbor? peer. No JS required for these micro-interactions."
        tryThis={['group-hover:bg-sky-500 → pink-500', 'group-hover:translate-x-1', 'peer-focus:ring on a field']}
        quiz="Q: group vs peer? A: group = parent→children; peer = earlier sibling→later siblings."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">group & peer</h2>
        <div className="group mb-4 flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3 hover:border-sky-400">
          <div className="size-10 rounded-full bg-slate-200 transition group-hover:bg-sky-500" />
          <div>
            <p className="text-sm font-medium group-hover:text-sky-700">Hover the card</p>
            <p className="text-xs text-slate-500 opacity-0 transition group-hover:opacity-100">child reacts via group-hover</p>
          </div>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="peer size-4 rounded border-slate-300" />
          <span className="text-slate-500 peer-checked:font-semibold peer-checked:text-emerald-700">peer-checked styles this label text</span>
        </label>
      </div>
    </>
  )
}
