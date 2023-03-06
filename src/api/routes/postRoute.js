module.exports = (server) => {
  const PostController = require("../controllers/postController");

  server
    .route("/posts")
    .get(PostController.listAllPosts)
    .post(PostController.createAPost);

  server
    .route("/posts/:post_id")
    .get(PostController.getAPost)
    .put(PostController.updateAPost)
    .delete(PostController.deleteAPost);
};
//   Post.findOneAndUpdate(
//     { _id: req.params.postId },
//     req.body,
//     { new: true },
//     (error, post) => {
//       if (error) {
//         res.status(500);
//         console.log(error);
//         res.json({ message: "Erreur serveur" });
//       } else {
//         res.status(200);
//         res.json(post);
//       }
//     }
//   );
// };

// exports.deleteAPost = (req, res) => {
//   Post.findOneAndDelete({ _id: req.params.postId }, (error, post) => {
//     if (error) {
//       res.status(500);
//       console.log(error);
//       res.json({ message: "Erreur serveur" });
//     } else {
//       res.status(200);
//       res.json(post);
//     }
//   });
// };
