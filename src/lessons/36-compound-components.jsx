/*
SUMMARY: Compound components (Tabs.Tab + Tabs.Panel) share implicit state via context so the JSX API stays flexible.
*/
import { createContext, useContext, useState } from 'react'
import Notes from '../Notes'

const TabsCtx = createContext(null)

function Tabs({ children, defaultValue }) {
  const [value, setValue] = useState(defaultValue)
  return <TabsCtx.Provider value={{ value, setValue }}><div className="stack">{children}</div></TabsCtx.Provider>
}
function TabList({ children }) { return <div className="row">{children}</div> }
function Tab({ value, children }) {
  const ctx = useContext(TabsCtx)
  return <button type="button" className={ctx.value === value ? '' : 'secondary'} onClick={() => ctx.setValue(value)}>{children}</button>
}
function TabPanel({ value, children }) {
  const ctx = useContext(TabsCtx)
  return ctx.value === value ? <div className="demo" style={{ margin: 0 }}>{children}</div> : null
}
Tabs.List = TabList
Tabs.Tab = Tab
Tabs.Panel = TabPanel

export default function Lesson36() {
  return (
    <>
      <Notes
        def="Compound components are a family of components that share state through context so callers compose <Tabs.Tab> next to <Tabs.Panel> without prop drilling."
        pic="A matching cutlery set — fork and knife only work as a set."
        hook="Shared implicit state via context."
        ideas={['Parent owns value/setValue. Children read context.', 'Tabs.List = TabList attaches pieces on the parent for a nice API.', 'Caller can reorder tabs in JSX — more flexible than <Tabs items={[...]} />.']}
        sum="One Provider, many coordinated children. Great for Tabs, Accordion, Select. Next step: controlled value prop."
        tryThis={['Controlled value + onChange', 'Accordion compound', 'Disable a tab']}
        quiz="Q: How do Tab and Panel sync? A: They read the same Tabs context."
      />
      <div className="demo">
        <h2>Compound components</h2>
        <Tabs defaultValue="one">
          <Tabs.List>
            <Tabs.Tab value="one">One</Tabs.Tab>
            <Tabs.Tab value="two">Two</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="one">Panel one</Tabs.Panel>
          <Tabs.Panel value="two">Panel two</Tabs.Panel>
        </Tabs>
      </div>
    </>
  )
}
