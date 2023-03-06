const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.userRegister = (req, res) => {
  let newUser = new User(req.body);

  newUser.save((error, user) => {
    if (error) {
      res.status(500);
      console.log(error);
      res.json({ message: "Erreur serveur." });
    } else {
      res.status(201);
      res.json({ message: `Utilisateur crée :${user.email}` });
    }
  });
};
