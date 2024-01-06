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
    <Route path="/" element={<Root data={userData} />}>
      {/*
      <Route
        path="user/:id"
        loader={({ params }) =>
          userData.find(user => user.userId === parseInt(params.id))
        }
        element={<Layout />}
        errorElement={<ErrorPage />}
      >
        <Route path="activity" element={<Activity />} />
        <Route path="average-sessions" element={<Sessions />} />
        <Route path="performance" element={<Performance />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
      */}
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
