/*
SUMMARY: Private wraps a page: if no user, <Navigate to="login" replace />. Auth lives in context, not in the route config alone.
*/
import { createContext, useContext, useState } from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import Notes from '../Notes'

const AuthCtx = createContext(null)
function useAuth() { return useContext(AuthCtx) }

function Private({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="login" replace />
}

function Login() {
  const { login } = useAuth()
  return <button type="button" onClick={() => login({ name: 'Ada' })}>fake login</button>
}

function Secret() {
  const { user, logout } = useAuth()
  return <div className="row"><span>Hello {user.name}</span><button type="button" className="secondary" onClick={logout}>logout</button></div>
}

export default function Lesson23() {
  const [user, setUser] = useState(null)
  return (
    <>
      <Notes
        def="A protected route is a gate component: it renders the page only if the user is authenticated; otherwise it redirects."
        pic="Velvet rope — only badge holders enter VIP."
        hook="Wrap private pages; redirect if no auth."
        ideas={['Private reads auth from context/store, not from a prop you might forget.', 'Navigate replace so Back doesn’t loop onto the forbidden URL.', 'Hiding a route is UX. The API must still reject unauthorized calls.']}
        sum="Auth state outside the router. Gate with a wrapper. replace on redirect. Real apps also refresh tokens (lesson 42)."
        tryThis={['Persist user in localStorage', 'Check role === "admin"', 'Save from: location to return after login']}
        quiz="Q: Why Navigate replace? A: Avoids the back button returning to the forbidden page."
      />
      <div className="demo stack">
        <h2>Protected routes</h2>
        <AuthCtx.Provider value={{ user, login: setUser, logout: () => setUser(null) }}>
          <div className="row">
            <Link to="login">login</Link>
            <Link to="secret">secret</Link>
          </div>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="secret" element={<Private><Secret /></Private>} />
            <Route path="*" element={<p className="muted">use links above</p>} />
          </Routes>
        </AuthCtx.Provider>
      </div>
    </>
  )
}
