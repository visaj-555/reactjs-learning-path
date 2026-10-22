/*
SUMMARY: text-* size/color, font-* weight, leading-* line-height, tracking-* letter-spacing, truncate/line-clamp overflow.
*/
import Notes from '../Notes'

export default function Lesson49() {
  return (
    <>
      <Notes
        def="Typography utilities set size (text-sm/xl), weight (font-bold), line-height (leading-relaxed), letter-spacing (tracking-tight), and overflow (truncate)."
        pic="The voice of the page — loud headlines, quiet body."
        hook="text-* size, font-* weight, leading-* line-height, tracking-* letters."
        ideas={['text-3xl font-bold tracking-tighter for display.', 'leading-relaxed for body; leading-none for labels.', 'truncate = one line ellipsis. line-clamp-2 = two lines then …']}
        sum="Pick a size scale and stick to it. Tight tracking on big type. Relaxed leading on paragraphs."
        tryThis={['text-3xl → text-5xl', 'tracking-tighter → tracking-wide', 'truncate → line-clamp-2']}
        quiz="Q: leading vs tracking? A: leading = line-height; tracking = letter-spacing."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold tracking-tight">Typography</h2>
        <p className="text-3xl font-bold tracking-tighter text-slate-900">Display</p>
        <p className="mt-1 text-base leading-relaxed text-slate-600">Body with leading-relaxed and muted color.</p>
        <p className="mt-2 max-w-xs truncate text-sm text-slate-500">This long line will truncate with an ellipsis when it overflows the max width container.</p>
      </div>
    </>
  )
}
