/*
SUMMARY: One-offs: w-[220px], bg-[#7c3aed]. Brand tokens: @theme in index.css → bg-brand, p-gut, font-display.
*/
import Notes from '../Notes'

export default function Lesson63() {
  return (
    <>
      <Notes
        def="Arbitrary values (square brackets) inject one-off CSS: w-[137px]. @theme in CSS defines reusable tokens that become utilities (bg-brand from --color-brand)."
        pic="Custom tape cuts (arbitrary) vs your brand paint catalog (@theme)."
        hook="bg-[#hex] for one-offs; @theme for reusable tokens."
        ideas={['w-[min(100%,18rem)] is valid. So is top-[22%].', '--color-brand in @theme → bg-brand / text-brand.', '--spacing-gut → p-gut. --font-display → font-display.']}
        sum="If you type the same hex twice, it belongs in @theme. Arbitrary is the escape hatch, not the system."
        tryThis={['bg-[#7c3aed] → #059669', 'w-[min(100%,18rem)]', 'text-[13px]']}
        quiz="Q: @theme vs arbitrary? A: @theme for repeated brand tokens; brackets for a one-off."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Arbitrary values & @theme</h2>
        <p className="mb-2 text-sm text-slate-600">Theme tokens from index.css @theme:</p>
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-brand px-3 py-1 text-sm text-white">bg-brand</span>
          <span className="rounded-md bg-brand-soft px-3 py-1 text-sm text-brand">bg-brand-soft</span>
          <span className="font-display text-sm">font-display</span>
        </div>
        <div className="h-[72px] w-[220px] rounded-[14px] bg-[#7c3aed] p-gut text-sm text-white">
          arbitrary size + p-gut token
        </div>
      </div>
    </>
  )
}
