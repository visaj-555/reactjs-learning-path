/*
SUMMARY: Mini app: login (JWT) → Query todos → filter client-side → mutate add/toggle. enabled: !!auth skips fetch until login.
*/
import { useMemo, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { API } from '../api'
import Notes from '../Notes'

async function loginReq(email, password) {
  const r = await fetch(`${API}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
  if (!r.ok) throw new Error('login failed')
  return r.json()
}

async function getTodos() {
  const r = await fetch(`${API}/todos`)
  if (!r.ok) throw new Error('todos failed')
  return r.json()
}

export default function Lesson45() {
  const [auth, setAuth] = useState(() => JSON.parse(localStorage.getItem('cap-auth') || 'null'))
  const [email, setEmail] = useState('user@demo.com')
  const [password, setPassword] = useState('user123')
  const [filter, setFilter] = useState('all')
  const [title, setTitle] = useState('')
  const [err, setErr] = useState('')
  const qc = useQueryClient()

  const todosQ = useQuery({ queryKey: ['cap-todos'], queryFn: getTodos, enabled: !!auth })
  const addM = useMutation({
    mutationFn: async (t) => {
      const r = await fetch(`${API}/todos`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: t }) })
      return r.json()
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cap-todos'] }),
  })
  const patchM = useMutation({
    mutationFn: async ({ id, done }) => {
      const r = await fetch(`${API}/todos/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ done }) })
      return r.json()
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['cap-todos'] }),
  })

  const visible = useMemo(() => {
    const list = todosQ.data ?? []
    if (filter === 'open') return list.filter((t) => !t.done)
    if (filter === 'done') return list.filter((t) => t.done)
    return list
  }, [todosQ.data, filter])

  async function onLogin(e) {
    e.preventDefault()
    try {
      const data = await loginReq(email, password)
      localStorage.setItem('cap-auth', JSON.stringify(data))
      setAuth(data)
      setErr('')
    } catch {
      setErr('Invalid credentials')
    }
  }

  function logout() {
    localStorage.removeItem('cap-auth')
    setAuth(null)
  }

  const notes = (
    <Notes
      def="A capstone stitches earlier lessons: auth state, TanStack Query for server todos, local filter state, and mutations that invalidate the cache."
      pic="Cooking a full meal with every technique from the course."
      hook="Login, fetch todos, filter — ship a tiny app."
      ideas={['enabled: !!auth — don’t hit /todos until logged in.', 'filter is client state; todos are server state.', 'Need backend: user@demo.com / user123']}
      sum="Separate client vs server state. Gate queries. Invalidate after writes. This is the everyday React app shape."
      tryThis={['Delete a todo', 'Admin-only clear', 'Put filter in the URL']}
      quiz="Q: Why enabled: !!auth? A: Skip fetching todos until the user is logged in."
    />
  )

  if (!auth) {
    return (
      <>
        {notes}
        <div className="demo stack">
          <h2>Capstone — login</h2>
          <form className="stack" onSubmit={onLogin}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">login</button>
          </form>
          {err && <p className="err">{err}</p>}
        </div>
      </>
    )
  }

  return (
    <>
      {notes}
      <div className="demo stack">
        <h2>Capstone todos</h2>
        <div className="row">
          <span className="tag">{auth.user.email} · {auth.user.role}</span>
          <button type="button" className="secondary" onClick={logout}>logout</button>
        </div>
        <div className="row">
          {['all', 'open', 'done'].map((f) => (
            <button key={f} type="button" className={filter === f ? '' : 'secondary'} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <form className="row" onSubmit={(e) => { e.preventDefault(); if (title.trim()) { addM.mutate(title.trim()); setTitle('') } }}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="new todo" />
          <button type="submit">add</button>
        </form>
        {todosQ.isLoading && <p>Loading…</p>}
        {todosQ.error && <p className="err">{todosQ.error.message}</p>}
        <ul className="list">
          {visible.map((t) => (
            <li key={t.id} className="row">
              <label className="row">
                <input type="checkbox" checked={t.done} onChange={() => patchM.mutate({ id: t.id, done: !t.done })} />
                <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.title}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
