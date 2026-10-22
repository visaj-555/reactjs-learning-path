/*
SUMMARY: shadow-* elevation. backdrop-blur blurs what's behind; blur blurs the element. opacity/brightness filters.
*/
import Notes from '../Notes'

export default function Lesson53() {
  return (
    <>
      <Notes
        def="Shadow utilities lift a card off the page (elevation). Filter utilities (blur, grayscale) change the element; backdrop-blur changes what’s seen through it."
        pic="A lamp making a card hover; frosted glass over a photo."
        hook="shadow-* elevation, opacity/blur/brightness filters."
        ideas={['shadow-sm → xl → 2xl. None for flat.', 'backdrop-blur-sm + bg-white/30 = glass.', 'drop-shadow for non-box shapes (text, PNG).']}
        sum="Use one or two shadow levels in an app. Glass = translucent bg + backdrop-blur. Don’t stack every effect."
        tryThis={['shadow-xl → shadow-none', 'backdrop-blur-sm → md', 'opacity-80 on a card']}
        quiz="Q: backdrop-blur vs blur? A: backdrop = behind the element; blur = the element itself."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Shadows & effects</h2>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-white p-4 text-center text-xs shadow-sm">sm</div>
          <div className="rounded-lg bg-white p-4 text-center text-xs shadow-md">md</div>
          <div className="rounded-lg bg-white p-4 text-center text-xs shadow-xl">xl</div>
        </div>
        <div className="relative h-28 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500">
          <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm">
            <span className="rounded-md bg-white/80 px-3 py-1 text-sm font-medium text-slate-800 shadow">backdrop-blur</span>
          </div>
        </div>
      </div>
    </>
  )
}
