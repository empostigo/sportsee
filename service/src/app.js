const express = require("express")
const axios = require("axios")

const remoteApi = "https://api.sportsee.empostigo.dev"
const user = remoteApi.concat("/user/12")

const app = express()

axios.get(user).then(response => {
  const stuff = response.data

  app.use("/user/12", (req, res, next) => {
    res.status(200).json(stuff)
  })
})

module.exports = app
