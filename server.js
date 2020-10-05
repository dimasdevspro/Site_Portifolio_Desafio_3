const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

server.get("view engine", "html")

nunjucks.configure("views", {
    express: server
})
server.get("/", function(req, res){
    return res.send("Hi! How's going? Many work?")
})

server.listen(5000, function(){
    console.log("Server is running!")
})

