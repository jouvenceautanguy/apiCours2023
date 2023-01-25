module.exports = (server) => {
    const PostController = require("../controllers/postController");

server.route("/posts")
    .get(postController.listAllPosts)
    .post(postController.createAPost);


}