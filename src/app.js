const express = require("express");

const hostname = "0.0.0.0";
const port = 3000;
const server = express();

server.get("/",(req,res) => {

    res.type('html');
    res.status(200);
    res.end("Home");
});

server.get("/posts",(req,res) => {

    res.type('html');
    res.status(200);
    res.end("Liste des articles");
});

server.post('/posts', (req, res) =>{

    res.type('html');
    res.status(201);
    res.end('Article crée');
})

// const server = http.createServer((req,res) => {

//     let url = req.url;


//     switch(url) {
//         case "/":
//             res.end("On est ok");
//             break;
//             case "/posts":
//                 res.statusCode= 200;
//                 res.setHeader = ('Content-type',"text/html");
//                 res.end("Liset des articles !");
//             break;

//             default:
//                     res.statusCode = 404;
//                     res.end("Erreur");
//                     break;
//     }
// })


server.listen(port,hostname);
