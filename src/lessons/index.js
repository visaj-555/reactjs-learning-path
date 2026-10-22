import L01 from './01-jsx'
import L02 from './02-components-props'
import L03 from './03-children'
import L04 from './04-lists-keys'
import L05 from './05-conditional'
import L06 from './06-events'
import L07 from './07-usestate'
import L08 from './08-useeffect'
import L09 from './09-useref'
import L10 from './10-usecontext'
import L11 from './11-usereducer'
import L12 from './12-usememo-usecallback'
import L13 from './13-custom-hooks'
import L14 from './14-rules-of-hooks'
import L15 from './15-useid-transition-deferred'
import L16 from './16-controlled-uncontrolled'
import L17 from './17-form-validation'
import L18 from './18-rhf-zod'
import L19 from './19-fetch-states'
import L20 from './20-tanstack-query'
import L21 from './21-cancel-race'
import L22 from './22-router'
import L23 from './23-protected-routes'
import L24 from './24-lazy-loading'
import L25 from './25-lifting-state'
import L26 from './26-context-vs-zustand'
import L27 from './27-redux-toolkit'
import L28 from './28-vdom-reconciliation'
import L29 from './29-what-triggers-rerenders'
import L30 from './30-batching'
import L31 from './31-keys-identity'
import L32 from './32-strict-mode'
import L33 from './33-react-memo'
import L34 from './34-suspense-codesplit'
import L35 from './35-composition'
import L36 from './36-compound-components'
import L37 from './37-render-props'
import L38 from './38-error-boundaries'
import L39 from './39-portals'
import L40 from './40-proptypes'
import L41 from './41-flexible-list'
import L42 from './42-jwt-auth'
import L43 from './43-role-based-ui'
import L44 from './44-testing'
import L45 from './45-capstone'
import L46 from './46-tailwind-mindset'
import L47 from './47-spacing'
import L48 from './48-sizing'
import L49 from './49-typography'
import L50 from './50-colors-opacity'
import L51 from './51-backgrounds-gradients'
import L52 from './52-borders-ring-divide'
import L53 from './53-shadows-effects'
import L54 from './54-display-position'
import L55 from './55-flexbox'
import L56 from './56-grid'
import L57 from './57-overflow-zindex'
import L58 from './58-interactive-states'
import L59 from './59-group-peer'
import L60 from './60-responsive'
import L61 from './61-dark-mode'
import L62 from './62-motion'
import L63 from './63-arbitrary-theme'
import L64 from './64-reusable-components'
import L65 from './65-tailwind-capstone'

const R = 'React'
const T = 'Tailwind'

export const lessons = [
  { id: '01-jsx', title: 'JSX', component: L01, group: R },
  { id: '02-components-props', title: 'Components & props', component: L02, group: R },
  { id: '03-children', title: 'Children', component: L03, group: R },
  { id: '04-lists-keys', title: 'Lists & keys', component: L04, group: R },
  { id: '05-conditional', title: 'Conditional rendering', component: L05, group: R },
  { id: '06-events', title: 'Events', component: L06, group: R },
  { id: '07-usestate', title: 'useState', component: L07, group: R },
  { id: '08-useeffect', title: 'useEffect', component: L08, group: R },
  { id: '09-useref', title: 'useRef', component: L09, group: R },
  { id: '10-usecontext', title: 'useContext', component: L10, group: R },
  { id: '11-usereducer', title: 'useReducer', component: L11, group: R },
  { id: '12-usememo-usecallback', title: 'useMemo / useCallback', component: L12, group: R },
  { id: '13-custom-hooks', title: 'Custom hooks', component: L13, group: R },
  { id: '14-rules-of-hooks', title: 'Rules of Hooks', component: L14, group: R },
  { id: '15-useid-transition-deferred', title: 'useId / transition / deferred', component: L15, group: R },
  { id: '16-controlled-uncontrolled', title: 'Controlled vs uncontrolled', component: L16, group: R },
  { id: '17-form-validation', title: 'Form validation', component: L17, group: R },
  { id: '18-rhf-zod', title: 'RHF + Zod', component: L18, group: R },
  { id: '19-fetch-states', title: 'Fetch loading/error', component: L19, group: R },
  { id: '20-tanstack-query', title: 'TanStack Query', component: L20, group: R },
  { id: '21-cancel-race', title: 'Cancel & race conditions', component: L21, group: R },
  { id: '22-router', title: 'React Router', component: L22, group: R },
  { id: '23-protected-routes', title: 'Protected routes', component: L23, group: R },
  { id: '24-lazy-loading', title: 'Lazy loading', component: L24, group: R },
  { id: '25-lifting-state', title: 'Lifting state up', component: L25, group: R },
  { id: '26-context-vs-zustand', title: 'Context vs Zustand', component: L26, group: R },
  { id: '27-redux-toolkit', title: 'Redux Toolkit', component: L27, group: R },
  { id: '28-vdom-reconciliation', title: 'Virtual DOM', component: L28, group: R },
  { id: '29-what-triggers-rerenders', title: 'What triggers re-renders', component: L29, group: R },
  { id: '30-batching', title: 'Batching', component: L30, group: R },
  { id: '31-keys-identity', title: 'Keys & identity', component: L31, group: R },
  { id: '32-strict-mode', title: 'Strict Mode', component: L32, group: R },
  { id: '33-react-memo', title: 'React.memo', component: L33, group: R },
  { id: '34-suspense-codesplit', title: 'Suspense & code splitting', component: L34, group: R },
  { id: '35-composition', title: 'Composition', component: L35, group: R },
  { id: '36-compound-components', title: 'Compound components', component: L36, group: R },
  { id: '37-render-props', title: 'Render props', component: L37, group: R },
  { id: '38-error-boundaries', title: 'Error boundaries', component: L38, group: R },
  { id: '39-portals', title: 'Portals', component: L39, group: R },
  { id: '40-proptypes', title: 'PropTypes', component: L40, group: R },
  { id: '41-flexible-list', title: 'Flexible List', component: L41, group: R },
  { id: '42-jwt-auth', title: 'JWT auth + refresh', component: L42, group: R },
  { id: '43-role-based-ui', title: 'Role-based UI', component: L43, group: R },
  { id: '44-testing', title: 'Vitest + RTL', component: L44, group: R },
  { id: '45-capstone', title: 'Capstone mini app', component: L45, group: R },
  { id: '46-tailwind-mindset', title: 'How Tailwind works', component: L46, group: T },
  { id: '47-spacing', title: 'Spacing', component: L47, group: T },
  { id: '48-sizing', title: 'Sizing', component: L48, group: T },
  { id: '49-typography', title: 'Typography', component: L49, group: T },
  { id: '50-colors-opacity', title: 'Colors & opacity', component: L50, group: T },
  { id: '51-backgrounds-gradients', title: 'Backgrounds & gradients', component: L51, group: T },
  { id: '52-borders-ring-divide', title: 'Borders, ring, divide', component: L52, group: T },
  { id: '53-shadows-effects', title: 'Shadows & effects', component: L53, group: T },
  { id: '54-display-position', title: 'Display & position', component: L54, group: T },
  { id: '55-flexbox', title: 'Flexbox utilities', component: L55, group: T },
  { id: '56-grid', title: 'Grid utilities', component: L56, group: T },
  { id: '57-overflow-zindex', title: 'Overflow & z-index', component: L57, group: T },
  { id: '58-interactive-states', title: 'Hover / focus / active', component: L58, group: T },
  { id: '59-group-peer', title: 'group & peer', component: L59, group: T },
  { id: '60-responsive', title: 'Responsive prefixes', component: L60, group: T },
  { id: '61-dark-mode', title: 'Dark mode', component: L61, group: T },
  { id: '62-motion', title: 'Transitions & animation', component: L62, group: T },
  { id: '63-arbitrary-theme', title: 'Arbitrary & @theme', component: L63, group: T },
  { id: '64-reusable-components', title: 'Reusable + clsx', component: L64, group: T },
  { id: '65-tailwind-capstone', title: 'Tailwind capstone', component: L65, group: T },
]
