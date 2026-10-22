/*
SUMMARY: Class strategy: html.dark enables dark:* variants (see @custom-variant in index.css). Pair light + dark: overrides.
*/
import { useEffect, useState } from 'react'
import Notes from '../Notes'

export default function Lesson61() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    return () => document.documentElement.classList.remove('dark')
  }, [dark])
  return (
    <>
      <Notes
        def="Dark mode variants (dark:) apply when a dark condition is true. This playground uses the class strategy: add .dark on <html> (see @custom-variant in index.css)."
        pic="Flip the room lights — same furniture, different paint."
        hook="dark: when .dark is on the document (class strategy)."
        ideas={['Always write the light classes, then dark:bg-slate-900 dark:text-slate-100.', 'Toggle document.documentElement.classList — cleanup on unmount so other lessons stay light.', 'prefers-color-scheme is the other strategy; class is easier to demo/toggle.']}
        sum="One toggle → class on html → every dark:* kicks in. Keep contrast (text-slate-100 on slate-900)."
        tryThis={['dark:bg-slate-900 → zinc-950', 'dark:border-amber-500', 'Heading dark:text-amber-300']}
        quiz="Q: How does class dark mode work? A: When html has class dark, dark:* utilities apply."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-3 text-lg font-semibold text-slate-900 dark:text-slate-100">Dark mode</h2>
        <button type="button" onClick={() => setDark((v) => !v)} className="mb-3 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white dark:bg-amber-400 dark:text-slate-900">
          toggle ({dark ? 'dark' : 'light'})
        </button>
        <div className="rounded-lg bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          Card follows <code className="dark:text-amber-300">dark:</code> variants
        </div>
      </div>
    </>
  )
}
