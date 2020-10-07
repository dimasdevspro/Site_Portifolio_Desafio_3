const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const blogs = require("./data")


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res){
    const about = {
        avatar_url:"https://avatars1.githubusercontent.com/u/28929274?s=280&v=4",
        title_info:"Descrição da empresa",
        description_title:"Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível",
        title_tech:"Principais tecnologias utilizadas",
        techs:[
            { name: "CSS"},
            { name: "HTML"}, 
            { name: "JavaScript"},
            { name: "Node JS"},
            { name: "React JS"},
            { name: "React Native"}, 
        ],
        links:[
            { name:"Github", url:"https://github.com/rocketseat-education/"},
            { name:"Instagram", url:"https://www.instagram.com/rocketseat_oficial/?hl=en"},
            { name:"Facebook", url:"https://pt-br.facebook.com/rocketseat/"},            
        ],
    }

        
    return res.render("about", { about })
})

server.get("/container.njk", function(req, res){


    return res.render("container", {items: blogs})
})

server.get("/layout.njk", function(req, res){
    return res.render("layout")
})

server.use(function(req, res) {
    res.status(404).render("not-found")
});

server.listen(3000, function(){
    console.log("Server is running!")
})

