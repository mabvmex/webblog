const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

// mongoose.set("useFindAndModify", false); // Cuando hay error en consola.

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/mabvmexBlog`,
  {
    useNewUrlParser: true, useUnifiedTopology: true
  },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la DB es correcta");
      
      app.listen(port, () => {
        console.log("######### API REST #########");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);
