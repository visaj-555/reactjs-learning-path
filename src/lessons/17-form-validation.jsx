/*
SUMMARY: Derive errors from values. Show them after blur/submit (touched) so empty fields don't scream.
*/
import { useState } from 'react'
import Notes from '../Notes'

function validate(values) {
  const e = {}
  if (!values.email.includes('@')) e.email = 'Need an @'
  if (values.password.length < 6) e.password = 'Min 6 chars'
  return e
}

export default function Lesson17() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const errors = validate(values) // derived — no extra state
  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))
  const show = (k) => (touched[k] || submitted) && errors[k]
  return (
    <>
      <Notes
        def="Form validation checks values against rules and shows messages. Errors should be derived from values, not stored as a second source of truth."
        pic="A bouncer checking IDs before you enter the club."
        hook="Validate on change/blur/submit — show clear errors."
        ideas={['errors = validate(values) each render. Don’t sync a copy of errors in state.', 'touched[field] or submitted gates when to display so pristine fields stay quiet.', 'HTML required is a hint — still validate in JS.']}
        sum="One values object. Pure validate(). Show after the user touched the field or hit submit."
        tryThis={['Confirm-password must match', 'Only live-validate after first submit', 'Success banner when errors is empty']}
        quiz="Q: Why track touched? A: So users aren’t flooded with errors before they interact."
      />
      <div className="demo stack">
        <h2>Form validation</h2>
        <input placeholder="email" value={values.email} onChange={set('email')} onBlur={() => setTouched((t) => ({ ...t, email: true }))} />
        {show('email') && <span className="err">{errors.email}</span>}
        <input type="password" placeholder="password" value={values.password} onChange={set('password')} onBlur={() => setTouched((t) => ({ ...t, password: true }))} />
        {show('password') && <span className="err">{errors.password}</span>}
        <button type="button" onClick={() => { setSubmitted(true); if (!Object.keys(errors).length) alert('OK') }}>submit</button>
      </div>
    </>
  )
}
