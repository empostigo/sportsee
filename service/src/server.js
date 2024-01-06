const http = require("http")
const user = require("./getData")

const server = http.createServer((request, response) => {
  response.end(user)
})

server.listen(process.env.PORT || 3000)
