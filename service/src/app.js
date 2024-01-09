const express = require("express")
const axios = require("axios")
const { mappingUserInfos, mappingUserActivity } = require("./formatData")

const remoteApi = "https://api.sportsee.empostigo.dev"

const app = express()

app.param("id", (req, res, next, value, name) => {
  req[name] = value
  next()
})

app.get("/user/:id", (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.id}`)
  axios(remoteURL)
    .then(response => {
      const userInfos = mappingUserInfos(response.data.data)
      res.status(201).json(userInfos)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send("Internal Server Error")
    })
})

app.get("/user/:id/activity", (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.id}/activity`)
  axios(remoteURL).then(response => {
    const userActivity = mappingUserActivity(response.data.data)
    res.status(201).json(userActivity)
  })
})

module.exports = app
