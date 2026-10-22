export default function Notes({ def, pic, hook, ideas, sum, tryThis, quiz }) {
  return (
    <aside className="notes">
      <p className="notes-def"><b>Definition.</b> {def}</p>
      <p className="notes-hook">“{hook}”</p>
      <p className="muted"><b>Picture.</b> {pic}</p>
      <p className="notes-k">Key ideas</p>
      <ul>{ideas.map((x) => <li key={x}>{x}</li>)}</ul>
      <p className="notes-sum"><b>Summary.</b> {sum}</p>
      <div className="notes-fold">
        <details open>
          <summary>Try this</summary>
          <ol>{tryThis.map((x) => <li key={x}>{x}</li>)}</ol>
        </details>
        <details>
          <summary>Quiz</summary>
          <p>{quiz}</p>
        </details>
      </div>
    </aside>
  )
}
