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

function getMenu(req, res) {
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

function updateMenu(req, res) {
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

function activateMenu(req, res) {
    const { id } = req.params;
    const { active } = req.body;

    Menu.findByIdAndUpdate(id, {active}, (err, menuActivated) =>{
        if (err){
            res.status(500).send({
                message: 'Error del servidor'
            });
        } else {
            if(!menuActivated){
                res.status(404).send({
                    message: 'No se ha encontrado el menú'
                });
            } else {
                if(active === true) {
                    res.status(200).send({
                        message: 'Menú activado correctamente'
                    });
                } else {
                    res.status(200).send({
                        message: 'Menú desactivado correctamente'
                    })
                }
            }
        }
    })
}

function deleteMenu(req, res) {
    const { id } = req.params;

    Menu.findByIdAndRemove(id, (err, menuDeleted) => {
        if(err) {
            res.status(500).send({
                message: 'Error del servidor'
            });
        } else {
            if(!menuDeleted) {
                res.status(404).send({
                    message: 'Menú no encontrado'
                });
            } else {
                res.status(200).send({
                    message: 'El menú ha sido eliminado exitosamente'
                });
            }
        }
    });
}

module.exports = {
  addMenu,
  getMenu,
  updateMenu,
  activateMenu,
  deleteMenu,
};
