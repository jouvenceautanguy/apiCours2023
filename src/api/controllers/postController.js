const Post = require("../models/postModel");

exports.listAllPosts = (req, res) => {
    res.type("html");
    res.status(200);
    res.end("Route pour lister tous les articles");
    
}

exports.createApost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((error, post) => {
        if (error)  {
            res.status(401);
            console.log(error);
            res.json({message:"Requête invalide"});
        }
            else{
                res.status(201);
                res.json(post);

            }
        }
    })
    res.type("html");
    res.status(200);
    res.end("Route pour créer un article");

}