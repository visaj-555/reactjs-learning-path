/*
SUMMARY: createPortal(jsx, document.body) paints in another DOM node (modals) while React parent/events stay the same.
*/
import { useState } from 'react'
import { createPortal } from 'react-dom'
import Notes from '../Notes'

export default function Lesson39() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Notes
        def="A portal renders React children into a DOM node you choose (often document.body) so overlays escape overflow:hidden and stacking of the parent."
        pic="A trapdoor — the modal lives in the floor, but it’s still your child."
        hook="Modal in body’s sibling, still React children."
        ideas={['createPortal(node, domNode) — here, document.body.', 'Events still bubble in the React tree (parent onClick can still fire) — stopPropagation on the dialog.', 'Use for modals, toasts, tooltips.']}
        sum="DOM position ≠ React parent. Portal for overlays. Keep accessibility (focus, Escape) in mind."
        tryThis={['Close on Escape', 'Focus trap', 'Portal tooltip']}
        quiz="Q: Where does the modal DOM live? A: Under document.body, not inside .demo."
      />
      <div className="demo stack" onClick={() => console.log('demo click')}>
        <h2>Portals</h2>
        <button type="button" onClick={() => setOpen(true)}>open modal</button>
        {open && createPortal(
          <div
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)', display: 'grid', placeItems: 'center' }}
            onClick={() => setOpen(false)}
          >
            <div className="demo" style={{ minWidth: 280 }} onClick={(e) => e.stopPropagation()}>
              <p>Portal modal</p>
              <button type="button" onClick={() => setOpen(false)}>close</button>
            </div>
          </div>,
          document.body,
        )}
      </div>
    </>
  )
}
