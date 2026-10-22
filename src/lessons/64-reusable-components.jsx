/*
SUMMARY: Repeat Tailwind? Extract a React component. clsx merges base + variant + conditionals without messy ternaries.
*/
import { useState } from 'react'
import clsx from 'clsx'
import Notes from '../Notes'

function Button({ variant = 'primary', children, ...rest }) {
  return (
    <button
      type="button"
      className={clsx(
        'rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'primary' && 'bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-400',
        variant === 'ghost' && 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
        variant === 'danger' && 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-400',
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

function Badge({ tone = 'ok', children }) {
  return (
    <span className={clsx(
      'inline-flex rounded-full px-2 py-0.5 text-xs font-medium',
      tone === 'ok' && 'bg-emerald-100 text-emerald-800',
      tone === 'warn' && 'bg-amber-100 text-amber-800',
    )}>
      {children}
    </span>
  )
}

export default function Lesson64() {
  const [on, setOn] = useState(true)
  return (
    <>
      <Notes
        def="Reusable styling in React means a small component that wraps a shared class bundle. clsx (or cn) concatenates class names and drops falsey conditionals."
        pic="Cookie cutters — same dough of classes, different fillings."
        hook="Extract repeated class strings; clsx for conditional recipes."
        ideas={['Button variants: shared base + variant === "danger" && danger classes.', 'clsx("a", on && "b", off && "c") — no ternary soup.', 'Don’t make a new .css class; make <Button variant="ghost" />.']}
        sum="Copy-paste of 8 classes twice → a component. Conditions → clsx. Variants as props, not boolean soup."
        tryThis={['variant="soft"', 'disabled && "opacity-50"', 'Extract a Card']}
        quiz="Q: Why clsx? A: Join strings and omit falsey branches without messy ternaries."
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="mb-3 text-lg font-semibold">Reusable components + clsx</h2>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Button>Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Badge>ok</Badge>
          <Badge tone="warn">warn</Badge>
        </div>
        <button
          type="button"
          onClick={() => setOn((v) => !v)}
          className={clsx('rounded-lg px-3 py-2 text-sm', on ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600')}
        >
          clsx toggle: {on ? 'ON' : 'OFF'}
        </button>
      </div>
    </>
  )
}
