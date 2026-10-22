/*
SUMMARY: Mobile-first: unprefixed = all sizes. sm/md/lg/xl add from that breakpoint up. hidden md:block for nav.
*/
import Notes from '../Notes'

export default function Lesson60() {
  return (
    <>
      <Notes
        def="Responsive prefixes apply utilities from a min-width breakpoint up: sm 640px, md 768px, lg 1024px, xl 1280px. Unprefixed classes are the mobile default."
        pic="Stage cues — phone first, then tablet, then the big screen."
        hook="Mobile-first: base, then sm: md: lg: xl: overrides."
        ideas={['grid-cols-1 md:grid-cols-3 — one column until md.', 'hidden md:block shows from md up; md:hidden is the inverse.', 'Resize this window and watch type grow sm→md→lg.']}
        sum="Design the small screen first. Add prefixes as space appears. Never start with desktop and fight your way down."
        tryThis={['md:grid-cols-3 → lg:grid-cols-4', 'Swap hidden md:block', 'xl:text-2xl']}
        quiz="Q: Is Tailwind desktop-first? A: No — mobile-first; larger prefixes stack on top."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Responsive prefixes</h2>
        <p className="mb-3 text-xs text-slate-500">Resize the window — layout shifts at breakpoints.</p>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="rounded-lg bg-sky-500 p-4 text-center text-xs text-white">1</div>
          <div className="rounded-lg bg-sky-500 p-4 text-center text-xs text-white md:col-span-2">md:col-span-2</div>
        </div>
        <p className="mt-3 text-sm text-slate-700 sm:text-base md:text-lg lg:text-xl">
          text grows: sm → md → lg
        </p>
        <div className="mt-3 hidden rounded-md bg-emerald-100 p-2 text-xs text-emerald-800 md:block">Visible from md up</div>
        <div className="mt-2 block rounded-md bg-amber-100 p-2 text-xs text-amber-800 md:hidden">Only below md</div>
      </div>
    </>
  )
}
