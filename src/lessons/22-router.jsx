/*
SUMMARY: Nested Routes + Outlet = layout with a hole. :id params via useParams(). URL is shareable state.
*/
import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom'
import Notes from '../Notes'

function Product() {
  const { id } = useParams() // from path ":id"
  return <p>Product id: <strong>{id}</strong></p>
}

function ShopLayout() {
  return (
    <div className="stack">
      <div className="row">
        <Link to="1">Item 1</Link>
        <Link to="2">Item 2</Link>
      </div>
      <Outlet /> {/* child route renders here */}
    </div>
  )
}

export default function Lesson22() {
  return (
    <>
      <Notes
        def="React Router maps URLs to components. Nested routes render inside a parent’s <Outlet />. Dynamic segments like :id are read with useParams()."
        pic="A museum map: URLs are rooms; nested routes are galleries inside a wing."
        hook="URL is state you can share."
        ideas={['<Link to="1"> relative to the current route (this lesson’s /lessons/22-router/1).', 'index route = the default child when no extra path.', 'useSearchParams for ?q= — still URL state.']}
        sum="Put layout in the parent, pages in children, params in the path. Links change the URL; the URL chooses the tree."
        tryThis={['useSearchParams for a query string', 'Navigate replace', 'Add a header above Outlet']}
        quiz="Q: What is Outlet? A: The placeholder where the matched child route element renders."
      />
      <div className="demo">
        <h2>React Router nested + params</h2>
        <Routes>
          <Route path="*" element={<ShopLayout />}>
            <Route index element={<p className="muted">Pick an item</p>} />
            <Route path=":id" element={<Product />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}
