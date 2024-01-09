const express = require("express")
const axios = require("axios")
const mappingUserInfos = require("./formatData")

const remoteApi = "https://api.sportsee.empostigo.dev"
const user = userId => remoteApi.concat(`/user/${userId}`)
//const activity =

const userIds = [12, 18]
const userPath = userIds.map(userId => `/user/${userId}`)
const userRoutes = userPath.map(userId => remoteApi.concat(userId))

const app = express()

const createUsersRoutes = () => {
  for (const userRoute in userRoutes)
    axios.get(userRoutes[userRoute]).then(response => {
      const rawUserData = response.data
      const formattedUserData = mappingUserInfos(rawUserData.data)

      app.use(userPath[userRoute], (req, res, next) => {
        res.status(201).json(formattedUserData)
      })
    })
}

const getUserActivity = () => {}

const createAPI = () => {
  createUsersRoutes()
}

createAPI()

module.exports = app
