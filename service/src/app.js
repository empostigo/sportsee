const express = require("express")
const axios = require("axios")
const {
  mappingUserInfos,
  mappingUserActivity,
  mappingUserPerformance
} = require("./formatData")

const remoteApi = "https://api.sportsee.empostigo.dev"
const localPath = "http://localhost:3000"

const userPath = "/user/:id"
const userActivity = `${userPath}/activity`
const userSessions = `${userPath}/average-sessions`
const userPerformance = `${userPath}/performance`
const userData = `${userPath}/user-data`

const app = express()

app.get(userPath, async (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.params.id}`)
  await axios(remoteURL)
    .then(response => {
      const userInfos = mappingUserInfos(response.data.data)
      res.status(201).json(userInfos)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send("Internal Server Error")
    })
})

app.get(userActivity, async (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.params.id}/activity`)
  await axios(remoteURL)
    .then(response => {
      const userActivity = mappingUserActivity(response.data.data)
      res.status(201).json(userActivity)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send("Internal Server Error")
    })
})

app.get(userSessions, async (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.params.id}/average-sessions`)
  await axios(remoteURL)
    .then(response => {
      res.status(201).json(response.data.data)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send("Internal Server Error")
    })
})

app.get(userPerformance, async (req, res) => {
  const remoteURL = remoteApi.concat(`/user/${req.params.id}/performance`)
  await axios(remoteURL)
    .then(response => {
      const userPerformance = mappingUserPerformance(response.data.data)
      res.status(201).json(userPerformance)
    })
    .catch(error => {
      console.error(error)
      res.status(500).send("Internal Server Error")
    })
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  )
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  )
  next()
})

app.get(userData, async (req, res) => {
  const userId = req.params.id

  const userURL = localPath.concat("/user/", userId)
  const userActivityURL = userURL.concat("/activity")
  const userSessionsURL = userURL.concat("/average-sessions")
  const userPerformanceURL = userURL.concat("/performance")

  try {
    const userInfosData = await axios(userURL).then(response => response.data)
    const userActivityData = await axios(userActivityURL).then(
      response => response.data
    )
    const userSessionsData = await axios(userSessionsURL).then(
      response => response.data
    )
    const userPerformanceData = await axios(userPerformanceURL).then(
      response => response.data
    )

    res.json({
      ...userInfosData,
      ...userActivityData,
      ...userSessionsData,
      ...userPerformanceData
    })
  } catch (error) {
    console.error(error)
  }
})

module.exports = app
