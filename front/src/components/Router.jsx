// React Router
import React from "react"
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom"

// Components
import Root from "./Root/Root"
import Header from "./Header/Header"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"
import Error404 from "./Error/Error404"

// mocked data
import data from "../fixtures/user.json"

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/user/:id" element={<Root />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </>
  )
)

const Router = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default Router
