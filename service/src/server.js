const http = require("http")
const app = require("./app")

/*
const remoteApi = "https://api.sportsee.empostigo.dev"
const user = remoteApi.concat("/user/12")
*/

app.set("port", process.env.PORT || 3000)
const server = http.createServer(app)

server.listen(process.env.PORT || 3000)
