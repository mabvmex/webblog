const Newsletter = require("../models/newsletter");

function suscribeEmail(req, res) {
  const { email } = req.params; // const email = req.params.email;
  const newsletter = new Newsletter();

  if (!email) {
    res.status(404).send({
      code: 404,
      message: "El email es obligatorio",
    });
  } else {
    newsletter.email = email.toLowerCase();
    newsletter.save((err, storedEmail_newsletter) => {
      if (err) {
        res.status(500).send({
          code: 500,
          message: "El email ya existe",
        });
      } else {
        if (!storedEmail_newsletter) {
          res.status(400).send({
            code: 400,
            message: "El email no ha sido registrado en el newsletter",
          });
        } else {
          res.status(200).send({
            code: 200,
            message: "Email registrado al Newsletter exitosamente",
          });
        }
      }
    });
  }
}

module.exports = {
  suscribeEmail,
};

/*  MI Código

newsletter.save((err, storedEmail_newsletter) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (!storedEmail_newsletter) {
        res.status(404).send({
          message: "Error al registrarse al Newsletter",
        });
      } else {
        res.status(200).send({

          message: "Email registrado al Newsletter exitosamente",
        });
      }
    }
  });
} 
*/
