/* const Post = require("../models/postModel");
//const textApiProvider = require("../providers/textApiProvider");
exports.listAllPosts = (req, res) => {
  Post.find({}, (error, posts) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Erreur serveur." });
    } else {
      res.status(200);
      res.json(posts);
    }
  });
};


exports.createAService = (req, res) => {
  
  let newPost = new Post(req.body);
// let post = Post.create({
//   title: req.body.title,
//   content: req.body.content,
// })
  if (!newPost.content) {
    let randomText = textApiProvider.getRandomText();
    newPost.content = randomText;

    randomText.then((result) => {
      newPost.content = result.body;
      newPost.save((error, post) => {
        if (error) {
          res.status(401);
          console.log(error);
          res.json({ message: "Reqûete invalide." });
        } else {
          res.status(201);
          res.json(post);
        }
      });
    });
  }
};
exports.getAPost = (req, res) => {
  Post.findById(req.params.post_id, (error, post) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Erreur serveur." });
    } else {
      res.status(200);
      res.json(post);
    }
  });
};
exports.updateAPost = (req, res) => {
  Post.findByIdAndUpdate(
    req.params.post_id,
    req.body,
    { new: true },
    (error, post) => {
      if (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur." });
      } else {
        res.status(200);
        res.json(post);
      }
    }
  );
};
exports.deleteAPost = (req, res) => {
  Post.findByIdAndRemove(req.params.post_id, (error) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Erreur serveur." });
    } else {
      res.status(200);
      res.json({ message: "Article supprimé" });
    }
  });
};
 */