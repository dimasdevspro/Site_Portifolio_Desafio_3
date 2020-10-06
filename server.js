const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    return res.render("index")
})

server.get("/views/about.html", function(req, res){
    return res.render("about")
})

server.get("/views/container.html", function(req, res){
    return res.render("container")
})

server.listen(3000, function(){
    console.log("Server is running!")
})

