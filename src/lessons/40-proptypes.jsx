/*
SUMMARY: PropTypes = runtime (dev) shape checks for JS. Defaults via param defaults. TypeScript is the compile-time cousin.
*/
import PropTypes from 'prop-types'
import Notes from '../Notes'

function Avatar({ name, size = 14 }) {
  return <span className="tag" style={{ fontSize: size }}>{name}</span>
}
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
}

export default function Lesson40() {
  return (
    <>
      <Notes
        def="PropTypes are runtime validators on a component’s props. In development, wrong types log a console warning. They do not run as a security check in production builds the same way TS does at compile time."
        pic="Sticky warning labels on shipping boxes."
        hook="Runtime checks for JS props (TS is compile-time)."
        ideas={['PropTypes.string.isRequired — missing/wrong → console warning.', 'Default size = 14 in the parameter — modern replacement for defaultProps.', 'Prefer TypeScript in new apps; PropTypes still help JS codebases.']}
        sum="Document the contract. Warn in dev. For real guarantees, add TypeScript."
        tryThis={['Pass name={1} and open the console', 'PropTypes.shape({...})', 'You already use default params — try required vs optional']}
        quiz="Q: PropTypes vs TypeScript? A: PropTypes = runtime (dev). TS = static at build time."
      />
      <div className="demo stack">
        <h2>PropTypes & defaults</h2>
        <Avatar name="Ada" />
        <Avatar name="Lin" size={18} />
      </div>
    </>
  )
}
