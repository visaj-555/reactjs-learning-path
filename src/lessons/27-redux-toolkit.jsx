/*
SUMMARY: RTK store (src/store.js) + createSlice. useSelector reads, dispatch(inc()) writes. Immer lets reducers "mutate".
*/
import { useDispatch, useSelector } from 'react-redux'
import { addBy, dec, inc } from '../store'
import Notes from '../Notes'

export default function Lesson27() {
  const value = useSelector((s) => s.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <Notes
        def="Redux Toolkit is a single app-wide store split into slices. Components dispatch actions; reducers update the slice; useSelector subscribes to a piece."
        pic="A central bank ledger — actions are deposits, the store is the balance."
        hook="One store, slices of state, dispatch actions."
        ideas={['createSlice({ name, initialState, reducers }) generates actions + reducer.', 'configureStore({ reducer: { counter } }) — see src/store.js, wrapped in <Provider> in main.jsx.', 'Immer: you write s.value += 1; it produces the next immutable state.']}
        sum="Put rare global UI/auth in Redux if the team wants a strict pattern. Don’t put every form field in the store."
        tryThis={['Add a todos slice', 'createAsyncThunk for fetch', 'Look at RTK Query']}
        quiz="Q: What does createSlice generate? A: A reducer plus action creators from your case reducers."
      />
      <div className="demo stack">
        <h2>Redux Toolkit</h2>
        <p>Store value: {value}</p>
        <div className="row">
          <button type="button" onClick={() => dispatch(dec())}>-</button>
          <button type="button" onClick={() => dispatch(inc())}>+</button>
          <button type="button" className="secondary" onClick={() => dispatch(addBy(5))}>+5</button>
        </div>
      </div>
    </>
  )
}
