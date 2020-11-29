const Menu = require("../models/menu");

function addMenu(req, res) {
  const { title, url, order, active } = req.body;
  const menu = new Menu();
  
  menu.title = title;
  menu.url = url;
  menu.order = order;
  menu.active = active;

  menu.save((err, createdMenu) => {
    if (err) {
      res.status(500).send({
        message: "Error del servidor",
      });
    } else {
      if (!createdMenu) {
        res.status(404).send({
          message: "Error al crear el menú",
        });
      } else {
        res.status(200).send({
          message: "Menú creado correctamente",
        });
      }
    }
  });
}

function getMenu (req, res) {
    Menu.find()
        .sort({order: 'asc'})
        .exec((err, menuStored) => {
            if (err) {
                res.status(500).send({
                    message: 'Error del servidor'
                });
            } else {
              if (!menuStored) {
                res.status(404).send({
                  message: 'No se ha encontrado ningún elemento en el menú',
                });
              } else {
                res.status(200).send({
                  menu: menuStored
                });
              }
            }
        });
}

function updateMenu (req, res) {
    let menuData = req.body;
    const params = req.params;

    Menu.findByIdAndUpdate(params.id, menuData, (err, menuUpdated) => {
        if(err) {
            res.status(500).send({
                message: 'Error del servidor'
            });
        } else {
            if (!menuUpdated) {
                res.status(404).send({
                    message: 'No se ha encontrado ningún menú'
                });
            } else {
                res.status(200).send({
                    message: 'Menú actualizado correctamente'
                });
            }
        }
    })
}


module.exports = {
  addMenu,
  getMenu,
  updateMenu,
};
