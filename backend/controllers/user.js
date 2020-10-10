const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");
const { use } = require("../routers/user");
// const jwt = require('');

function signUp(req, res) {
  const user = new User();

  const { name, lastname, email, password, repeatPassword } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email.toLowerCase();
  user.role = "admin";
  user.active = false;

  if (!password || !repeatPassword) {
    res.status(404).send({ message: "Las contraseñas son obligatorias" });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({
        message: "Las contraseñas no coinciden",
      });
    } else {
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({
            message: "Error al encriptar la contraseña.",
          });
        } else {
          user.password = hash;
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({
                message: `Error, el usuario '${user.email}' ya existe.`,
                err,
              });
            } else {
              if (!userStored) {
                res.status(404).send({
                  message: "Error al crear el usuario",
                });
              } else {
                res.status(200).send({
                  user: userStored,
                });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = {
  signUp,
};
