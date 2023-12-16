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

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Root />} />)
)

const SportSeeRouter = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default SportSeeRouter
