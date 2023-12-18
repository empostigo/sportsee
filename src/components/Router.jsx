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
import Profil from "../pages/Profil/Profil"
import Activity from "../pages/Activity/Activity"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Sessions from "../pages/Sessions/Sessions"
import Performance from "../pages/Performance/Performance"
import Users from "../pages/Users/Users"

// data
import userData from "../fixtures/user.json"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="users" element={<Users />} />
      <Route
        path="user/:id"
        loader={({ params }) =>
          userData.find(user => user.userId === parseInt(params.id))
        }
        element={<Profil />}
        errorElement={"Erreur"}
      />
      <Route path="user/:id/activity" element={<Activity />} />
      <Route path="user/:id/average-sessions" element={<Sessions />} />
      <Route path="user/:id/performance" element={<Performance />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
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
