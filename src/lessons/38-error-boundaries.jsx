/*
SUMMARY: Class error boundaries catch render crashes in children, show fallback, log. They do not catch event/async errors.
*/
import { Component, useState } from 'react'
import Notes from '../Notes'

class Boundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } } // next render = fallback
  componentDidCatch(error) { console.error(error) } // side effect: log
  render() {
    if (this.state.error) {
      return (
        <div className="stack">
          <p className="err">Fallback: {this.state.error.message}</p>
          <button type="button" className="secondary" onClick={() => this.setState({ error: null })}>reset</button>
        </div>
      )
    }
    return this.props.children
  }
}

function Bomb({ blow }) {
  if (blow) throw new Error('Boom from render')
  return <p className="ok">Safe</p>
}

export default function Lesson38() {
  const [blow, setBlow] = useState(false)
  return (
    <>
      <Notes
        def="An error boundary is a component (still typically a class) that catches errors during render/lifecycle of its children and shows fallback UI instead of a white screen."
        pic="A safety net under a trapeze."
        hook="Class: getDerivedStateFromError / componentDidCatch."
        ideas={['Catches render errors, not onClick try/catch-needed events, not rejected promises.', 'Reset by clearing boundary state (and usually the prop that threw).', 'Place boundaries around risky panels, not the whole app only.']}
        sum="Crash in render → fallback. Log it. Reset. Handle async yourself. Function components still need a class (or a tiny library) for this."
        tryThis={['Nested boundaries', 'Log to a fake service', 'Throw inside onClick — boundary won’t catch it']}
        quiz="Q: Do boundaries catch async errors? A: Not automatically — handle promises yourself."
      />
      <div className="demo stack">
        <h2>Error boundaries</h2>
        <Boundary>
          <Bomb blow={blow} />
        </Boundary>
        <button type="button" onClick={() => setBlow(true)}>explode</button>
      </div>
    </>
  )
}
