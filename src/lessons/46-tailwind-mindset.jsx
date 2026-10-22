/*
SUMMARY: Tailwind = utility classes in markup (p-4, bg-sky-50). One class ≈ one CSS idea. Compose, don't invent stylesheets.
*/
import Notes from '../Notes'

export default function Lesson46() {
  return (
    <>
      <Notes
        def="Tailwind is a utility-first CSS toolkit: you style by combining tiny classes that each do one job (padding, color, flex) instead of writing custom CSS files."
        pic="Lego studs — each class is one brick you snap onto the markup."
        hook="Style in the markup; compose, don't invent CSS files."
        ideas={['p-4 → padding: 1rem. bg-sky-50 → background. text-sm → font-size.', 'Theme tokens (colors, spacing) live in CSS @theme — change once, reuse.', 'If a string of classes repeats, extract a React component (lesson 64) — not a CSS class soup.']}
        sum="Think in constraints. Pick from the scale. Keep demos 46–65 in Tailwind only so your eyes learn the vocabulary."
        tryThis={['bg-sky-50 → bg-amber-50', 'Add font-bold', 'rounded-lg → rounded-none']}
        quiz="Q: What is a utility class? A: A single-purpose class that applies one CSS declaration (or a small related set)."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">How Tailwind works</h2>
        <p className="mb-3 text-sm text-slate-600">Same box, built only from utilities:</p>
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-sky-50 px-4 py-3 text-sky-800">
          <span className="rounded-full bg-sky-600 px-2 py-0.5 text-xs font-medium text-white">utility</span>
          <span className="text-sm font-medium">No custom CSS in this demo</span>
        </div>
      </div>
    </>
  )
}
