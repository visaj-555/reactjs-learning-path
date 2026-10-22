/*
SUMMARY: useReducer: one function turns (state, action) into next state. dispatch({ type }) instead of many setters.
*/
import { useReducer } from 'react'
import Notes from '../Notes'

function reducer(state, action) {
  switch (action.type) {
    case 'inc': return { ...state, count: state.count + 1 }
    case 'dec': return { ...state, count: state.count - 1 }
    case 'set': return { ...state, count: action.payload }
    default: return state
  }
}

export default function Lesson11() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <>
      <Notes
        def="useReducer(reducer, init) is state with a named event log. You dispatch actions; the reducer returns the next state."
        pic="A traffic controller: cars (actions) in, new light pattern (state) out."
        hook="Dispatch intent, don't sprinkle setStates."
        ideas={['reducer must be pure: same inputs → same output, no side effects.', 'dispatch({ type: "inc" }) or { type: "set", payload: 10 }.', 'Prefer over useState when many related fields / event types (forms, wizards, undo).']}
        sum="Name the events. Keep transitions in one switch. UI only asks; reducer decides the next snapshot."
        tryThis={['Add reset', 'Todo list reducer (add/toggle/remove)', 'Undo stack of previous states']}
        quiz="Q: When prefer reducer over useState? A: Complex related updates or many event types."
      />
      <div className="demo stack">
        <h2>useReducer</h2>
        <p>Count: {state.count}</p>
        <div className="row">
          <button type="button" onClick={() => dispatch({ type: 'dec' })}>-</button>
          <button type="button" onClick={() => dispatch({ type: 'inc' })}>+</button>
          <button type="button" className="secondary" onClick={() => dispatch({ type: 'set', payload: 10 })}>set 10</button>
        </div>
      </div>
    </>
  )
}
