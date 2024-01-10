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

// data
import userData from "../fixtures/user.json"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root data={userData} />} />
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
