const http = require("http")

/*
const remoteApi = "https://api.sportsee.empostigo.dev"
const user = remoteApi.concat("/user/12")
*/

const server = http.createServer((request, response) => {
  response.end("This is node sever!")
})

server.listen(process.env.PORT || 3000)
