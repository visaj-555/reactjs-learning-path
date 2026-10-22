import { configureStore, createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    inc: (s) => { s.value += 1 },
    dec: (s) => { s.value -= 1 },
    addBy: (s, a) => { s.value += a.payload },
  },
})

export const { inc, dec, addBy } = counter.actions
export const store = configureStore({ reducer: { counter: counter.reducer } })
