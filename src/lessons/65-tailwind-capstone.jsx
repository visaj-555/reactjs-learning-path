/*
SUMMARY: Compose a marketing site from utilities: responsive nav, hero, pricing grid, dashboard shell. No custom CSS in the demo.
*/
import { useState } from 'react'
import Notes from '../Notes'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <span className="text-sm font-bold tracking-tight text-slate-900">Nova<span className="text-sky-600">UI</span></span>
        <nav className="hidden gap-4 text-sm text-slate-600 md:flex">
          <a className="hover:text-sky-600" href="#hero">Product</a>
          <a className="hover:text-sky-600" href="#pricing">Pricing</a>
          <a className="hover:text-sky-600" href="#dash">Dashboard</a>
        </nav>
        <button type="button" className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white md:inline-flex" onClick={() => setOpen((v) => !v)}>
          <span className="md:hidden">{open ? 'Close' : 'Menu'}</span>
          <span className="hidden md:inline">Sign in</span>
        </button>
      </div>
      {open && (
        <div className="space-y-2 border-t border-slate-100 px-4 py-3 text-sm md:hidden">
          <a className="block text-slate-700" href="#hero">Product</a>
          <a className="block text-slate-700" href="#pricing">Pricing</a>
          <a className="block text-slate-700" href="#dash">Dashboard</a>
        </div>
      )}
    </header>
  )
}

function Landing() {
  return (
    <section id="hero" className="bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-xs font-semibold tracking-wide text-sky-600 uppercase">Ship faster</p>
        <h3 className="max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Build polished UIs with utility-first CSS</h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-600">A tiny marketing strip styled only with Tailwind — hero, proof, and CTA.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a href="#pricing" className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">See pricing</a>
          <a href="#dash" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Open dashboard</a>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Starter', price: '$9', perks: ['1 project', 'Email support'] },
    { name: 'Pro', price: '$29', perks: ['10 projects', 'Priority support', 'Analytics'], featured: true },
    { name: 'Team', price: '$79', perks: ['Unlimited', 'SSO', 'Audit log'] },
  ]
  return (
    <section id="pricing" className="px-4 py-10">
      <h3 className="mb-4 text-center text-xl font-bold text-slate-900">Pricing</h3>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl border p-5 shadow-sm ${p.featured ? 'border-sky-500 bg-sky-50 ring-2 ring-sky-200' : 'border-slate-200 bg-white'}`}>
            <p className="text-sm font-semibold text-slate-900">{p.name}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight">{p.price}<span className="text-sm font-normal text-slate-500">/mo</span></p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              {p.perks.map((x) => <li key={x}>✓ {x}</li>)}
            </ul>
            <button type="button" className={`mt-4 w-full rounded-lg py-2 text-sm font-medium ${p.featured ? 'bg-sky-600 text-white' : 'bg-slate-900 text-white'}`}>Choose</button>
          </div>
        ))}
      </div>
    </section>
  )
}

function Dashboard() {
  return (
    <section id="dash" className="border-t border-slate-200 bg-slate-50 px-4 py-8">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[200px_1fr]">
        <aside className="rounded-xl border border-slate-200 bg-white p-3 text-sm">
          <p className="mb-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">Menu</p>
          {['Overview', 'Orders', 'Customers', 'Settings'].map((i) => (
            <a key={i} href="#dash" className="block rounded-md px-2 py-1.5 text-slate-700 hover:bg-slate-100">{i}</a>
          ))}
        </aside>
        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-3">
            {[['Revenue', '$12.4k'], ['Orders', '318'], ['Conv.', '3.2%']].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-500">{k}</p>
                <p className="text-xl font-bold text-slate-900">{v}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-4 py-2 text-sm font-medium">Recent orders</div>
            <ul className="divide-y divide-slate-100 text-sm">
              {['#1042 · Shipped', '#1041 · Packed', '#1040 · Paid'].map((r) => (
                <li key={r} className="px-4 py-2 text-slate-600">{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Lesson65() {
  return (
    <>
      <Notes
        def="This capstone is a full page built only from Tailwind: navbar (flex + md:flex), hero (gradient + type scale), pricing (responsive grid), dashboard (sidebar + metric cards)."
        pic="Furnishing a whole storefront — landing, prices, nav, dashboard."
        hook="Compose layouts from utilities only — no custom CSS."
        ideas={['hidden md:flex for desktop links; hamburger below md.', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 for pricing.', 'Dashboard: md:grid-cols-[200px_1fr] — arbitrary track for the sidebar.']}
        sum="Reuse flex/grid/spacing/type. Mobile first. Featured plan = ring + extra bg. This is how real marketing pages get built in Tailwind."
        tryThis={['sky-* → violet-*', 'lg:grid-cols-4 metrics', 'sticky top-0 z-20 on the navbar']}
        quiz="Q: Why mobile-first grids? A: 1-col default, then sm/md/lg add columns without fighting small screens."
      />
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <Navbar />
        <Landing />
        <Pricing />
        <Dashboard />
      </div>
    </>
  )
}
