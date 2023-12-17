// React Router
import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom"

// Components
import Root from "./Root/Root"
import NavBar from "./NavBar/NavBar"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/profil" element={<NavBar />} />
    </Route>
  )
)

const SportSeeRouter = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default SportSeeRouter
