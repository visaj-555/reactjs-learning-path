/*
SUMMARY: Render builds a description (virtual tree). Reconciliation diffs it vs last tree and patches real DOM. Type/key change → remount.
*/
import { useState } from 'react'
import Notes from '../Notes'

export default function Lesson28() {
  const [mode, setMode] = useState('a')
  return (
    <>
      <Notes
        def="The virtual DOM is a JS description of UI. Reconciliation is React comparing the new description to the old one and updating only what changed in the real DOM."
        pic="A sketch vs last sketch — only the mural patches that differ get painted."
        hook="React diffs trees, then updates the DOM minimally."
        ideas={['Same type + same key → update props/children in place (typed text can survive).', 'Different type (input vs textarea) or different key → destroy and remount (state lost).', 'VDOM is not “no DOM”. It’s cheaper, batched DOM work.']}
        sum="Think in trees. Type + key decide identity. Don’t fear the DOM — React just plans the patch."
        tryThis={['Same type, change key — watch text reset', 'Swap nested trees', 'useEffect(() => console.log("mount"), []) on the input']}
        quiz="Q: Does VDOM mean no DOM updates? A: No — smarter, batched DOM updates."
      />
      <div className="demo stack">
        <h2>Virtual DOM & reconciliation</h2>
        <button type="button" onClick={() => setMode((m) => (m === 'a' ? 'b' : 'a'))}>swap type ({mode})</button>
        {mode === 'a' ? <input key="a" defaultValue="input A (remounts when type/key changes)" /> : <textarea key="b" defaultValue="textarea B" />}
        <p className="muted">Changing element type discards DOM state (e.g. typed text).</p>
      </div>
    </>
  )
}
