const express = require('express');
const logger =  require("./middleware/logger")
const helmet = require("helmet")
const cors = require("cors")
const welcomeRouter = require("./welcome/welcome-router")
const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")


const server = express()
const port = process.env.PORT || 3100

server.use(express.json())
server.use(logger())
server.use(cors())
server.use(helmet())

server.use(welcomeRouter)
server.use("/api/users", userRouter)
server.use("/api/posts", postRouter)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "something went wrong",
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = server;
