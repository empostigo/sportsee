const express = require("express")
const axios = require("axios")
const {
  mappingUserInfos,
  mappingUserActivity,
  mappingUserPerformance
} = require("./formatData")

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

app.get("/user/:id/average-sessions", (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.id}/average-sessions`)
  axios(remoteURL).then(response => {
    res.status(201).json(response.data.data)
  })
})

app.get("/user/:id/performance", (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.id}/performance`)
  axios(remoteURL).then(response => {
    const userPerformance = mappingUserPerformance(response.data.data)
    res.status(201).json(userPerformance)
  })
})

module.exports = app
