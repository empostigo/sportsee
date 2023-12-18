// React Router
import { Outlet, useParams } from "react-router-dom"

//Components
import NavBar from "../NavBar/NavBar"

const Layout = () => {
  const { id } = useParams()

  return (
    <main>
      <NavBar userId={id} />
      <Outlet />
    </main>
  )
}

export default Layout
