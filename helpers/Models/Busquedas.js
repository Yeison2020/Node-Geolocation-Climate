const axios = require("axios").default;

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose"];
  constructor() {
    // TODO  LEER DB si existes
  }

  async ciudad(lugar = "") {
    // HTTP Request

    console.log("Ciudad:", lugar);

    const resp = await axios.get("https://reqres.in/api/users?page=2");
    console.log(resp);

    return []; // Return an  array that matches the array of names availables
  }
}

module.exports = Busquedas;
