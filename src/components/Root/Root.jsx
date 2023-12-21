// Components
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root