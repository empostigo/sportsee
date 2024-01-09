const express = require("express")
const axios = require("axios")
const mappingUserInfos = require("./formatData")

const remoteApi = "https://api.sportsee.empostigo.dev"
const user = remoteApi.concat("/user/12")

const app = express()

axios.get(user).then(response => {
  const rawUserData = response.data
  const formattedUserData = mappingUserInfos(rawUserData.data)

  app.use("/user/12", (req, res, next) => {
    res.status(200).json(formattedUserData)
  })
})

module.exports = app
