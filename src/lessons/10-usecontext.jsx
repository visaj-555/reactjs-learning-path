/*
SUMMARY: Context broadcasts a value down the tree so you skip prop-drilling. Consumers re-render when value identity changes.
*/
import { createContext, useContext, useState } from 'react'
import Notes from '../Notes'

const ThemeCtx = createContext('light')

function ThemedBox() {
  const theme = useContext(ThemeCtx) // subscribe: re-renders when Provider value changes
  return (
    <div style={{ padding: 12, borderRadius: 8, background: theme === 'dark' ? '#111' : '#eef', color: theme === 'dark' ? '#eee' : '#111' }}>
      Theme: {theme}
    </div>
  )
}

export default function Lesson10() {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <Notes
        def="Context is a pipe: a Provider publishes a value; any descendant calls useContext to read it without props being passed through every layer."
        pic="House intercom — you don’t walk every floor with a note."
        hook="Provider broadcasts; consumers subscribe."
        ideas={['createContext(default) → <Ctx.Provider value={x}> → useContext(Ctx).', 'If value is a new object every render, all consumers re-render. Memoize or split state/dispatch.', 'Great for theme, auth, locale — not for high-frequency data (use a store).']}
        sum="Skip prop drilling for rare, wide state. Keep the value stable. For selective subscriptions, Zustand/Redux often win."
        tryThis={['Nest two Providers', 'Pass { user, login } as auth context', 'Wrap useContext in useTheme()']}
        quiz="Q: When does a consumer re-render? A: When the Provider’s value is a different Object.is result."
      />
      <div className="demo stack">
        <h2>useContext</h2>
        <ThemeCtx.Provider value={theme}>
          <ThemedBox />
          <button type="button" onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>toggle theme</button>
        </ThemeCtx.Provider>
      </div>
    </>
  )
}
