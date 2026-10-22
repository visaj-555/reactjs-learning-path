/*
SUMMARY: Palette is name-shade (sky-500). Slash opacity: bg-sky-500/15. Same scale for text/bg/border.
*/
import Notes from '../Notes'

export default function Lesson50() {
  return (
    <>
      <Notes
        def="Tailwind colors are named ramps (slate, sky, rose…) from 50 (light) to 950 (dark). Opacity is a slash: /20 = 20% alpha."
        pic="Paint swatches; opacity is how sheer the coat is."
        hook="color-shade (sky-500) + /opacity (bg-sky-500/20)."
        ideas={['bg-*, text-*, border-* share the same ramp.', 'Tints: bg-sky-500/15 for chips. Faded text: text-slate-900/40.', 'Don’t invent random hex until @theme / arbitrary (63).']}
        sum="Stay on the ramp. Pair 500 buttons with 50 backgrounds and 800 text. Slash for overlays."
        tryThis={['/15 → /40', 'text-sky-800 → text-sky-950', 'border border-sky-500/50']}
        quiz="Q: What does /20 mean? A: 20% opacity (alpha) on that color."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Colors & opacity</h2>
        <div className="flex flex-wrap gap-2">
          {['bg-rose-500', 'bg-amber-500', 'bg-emerald-500', 'bg-sky-500', 'bg-violet-500'].map((c) => (
            <div key={c} className={`h-10 w-16 rounded-md ${c}`} title={c} />
          ))}
        </div>
        <p className="mt-3 rounded-md bg-sky-500/15 px-3 py-2 text-sm text-sky-800">bg-sky-500/15 · text-sky-800</p>
        <p className="mt-2 text-sm text-slate-900/40">text-slate-900/40 faded</p>
      </div>
    </>
  )
}
