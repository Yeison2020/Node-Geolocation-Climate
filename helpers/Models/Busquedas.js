const axios = require("axios").default;

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "San Jose", "San cristobal"];
  constructor() {
    // TODO  LEER DB si existentes
  }

  async ciudad(lugar = "") {
    // HTTP Request

    console.log("Ciudad:", lugar);

    const resp = await axios.get("https://reqres.in/api/users?page=3");
    console.log(resp.data.per_page);

    return []; // Return an  array that matches the array of names availables
  }
}

module.exports = Busquedas;
