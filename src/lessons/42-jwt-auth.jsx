/*
SUMMARY: Login → access + refresh JWTs. Bearer on /auth/me. 401 → POST /auth/refresh then retry. Logout drops the refresh token.
*/
import { useState } from 'react'
import { API } from '../api'
import Notes from '../Notes'

export default function Lesson42() {
  const [email, setEmail] = useState('user@demo.com')
  const [password, setPassword] = useState('user123')
  const [tokens, setTokens] = useState(() => JSON.parse(localStorage.getItem('tokens') || 'null'))
  const [me, setMe] = useState(null)
  const [err, setErr] = useState('')

  const save = (t) => { setTokens(t); localStorage.setItem('tokens', JSON.stringify(t)) }

  async function login() {
    setErr('')
    const r = await fetch(`${API}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    if (!r.ok) return setErr('login failed')
    save(await r.json())
  }

  async function loadMe() {
    setErr('')
    let r = await fetch(`${API}/auth/me`, { headers: { Authorization: `Bearer ${tokens?.accessToken}` } })
    if (r.status === 401 && tokens?.refreshToken) {
      const rr = await fetch(`${API}/auth/refresh`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ refreshToken: tokens.refreshToken }) })
      if (!rr.ok) { save(null); return setErr('refresh failed') }
      const next = await rr.json()
      save(next)
      r = await fetch(`${API}/auth/me`, { headers: { Authorization: `Bearer ${next.accessToken}` } })
    }
    if (!r.ok) return setErr('me failed')
    setMe(await r.json())
  }

  async function logout() {
    if (tokens?.refreshToken) await fetch(`${API}/auth/logout`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ refreshToken: tokens.refreshToken }) })
    save(null); setMe(null)
  }

  return (
    <>
      <Notes
        def="JWT auth: the server signs a short-lived access token (sent as Authorization: Bearer) and a longer-lived refresh token used only to mint a new access token."
        pic="A stamped wristband (access) plus a booth that reprints it (refresh) before it expires."
        hook="Access short-lived; refresh rotates longer-lived."
        ideas={['POST /auth/login → { accessToken, refreshToken, user }.', 'On 401, POST /auth/refresh then retry. If refresh fails, logout.', 'Real apps: keep access in memory, refresh in httpOnly cookie. This demo uses localStorage for learning.']}
        sum="Login stores tokens. API calls send Bearer. Refresh on 401. Never treat UI login as security — the API checks the signature."
        tryThis={['Axios interceptor for 401', 'Memory-only access token', 'Timer to refresh before expiry']}
        quiz="Q: Why refresh tokens? A: Rotate short-lived access tokens without re-typing the password."
      />
      <div className="demo stack">
        <h2>JWT auth + refresh</h2>
        <p className="muted">user@demo.com / user123 · admin@demo.com / admin123</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="row">
          <button type="button" onClick={login}>login</button>
          <button type="button" className="secondary" onClick={loadMe} disabled={!tokens}>/me</button>
          <button type="button" className="secondary" onClick={logout} disabled={!tokens}>logout</button>
        </div>
        {err && <p className="err">{err}</p>}
        {tokens && <p className="ok">logged in as {tokens.user?.email} ({tokens.user?.role})</p>}
        {me && <pre>{JSON.stringify(me, null, 2)}</pre>}
      </div>
    </>
  )
}
