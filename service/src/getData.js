const axios = require("axios")

const remoteApi = "https://api.sportsee.empostigo.dev"
const user = remoteApi.concat("/user/12")

const getData = axios.get(user).then(response => {
  console.log(response)
})

module.exports = getData
