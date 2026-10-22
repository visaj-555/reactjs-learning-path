/*
SUMMARY: transition-* + duration + hover:translate/scale. animate-spin/pulse/bounce for loops. Transform without transition = jump.
*/
import Notes from '../Notes'

export default function Lesson62() {
  return (
    <>
      <Notes
        def="Motion utilities: transition-* smooths property changes, transform moves/scales/rotates, animate-* runs keyframe loops (spin, pulse, bounce)."
        pic="Choreography — ease in, spin, land softly."
        hook="transition-* + duration + transform + animate-*."
        ideas={['transition hover:-translate-y-0.5 hover:shadow-lg = lift button.', 'Without transition, scale jumps. duration-300 is a good default.', 'animate-spin for loaders. Prefer subtle; respect reduced-motion in real apps.']}
        sum="Transition the change. Transform the pose. Animate only loaders/attention. Keep it under 300ms for UI."
        tryThis={['duration-300 → 700', 'hover:rotate-3', 'animate-spin → animate-ping']}
        quiz="Q: Why transition with transform? A: Without transition-*, the transform snaps instead of easing."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Transitions, transforms, animations</h2>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <button type="button" className="rounded-lg bg-sky-600 px-4 py-2 text-sm text-white transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-lg active:translate-y-0">
            lift on hover
          </button>
          <div className="size-10 animate-spin rounded-full border-4 border-slate-200 border-t-sky-600" />
          <div className="size-10 animate-pulse rounded-full bg-pink-400" />
          <div className="animate-bounce text-2xl">↓</div>
        </div>
        <div className="origin-left scale-100 rounded-md bg-indigo-100 p-3 text-sm transition duration-300 hover:scale-105 hover:bg-indigo-200">
          hover:scale-105
        </div>
      </div>
    </>
  )
}
