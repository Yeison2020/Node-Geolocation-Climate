const axios = require("axios").default;

class Busquedas {
  historial = [
    "Tegucigalpa",
    "Madrid",
    "San Jose",
    "San cristobal",
    "Santo Domingo",
    "San Jose de Ocoa",
  ];
  constructor() {
    // TODO  LEER DB si existentes
    // Here I will read my DB
  }

  async ciudad(lugar = "") {
    // HTTP Request

    console.log("Ciudad:", lugar);

    const resp = await axios.get("https://reqres.in/api/users?page=3");
    console.log(resp.data.per_page);

    return [resp.data.per_page]; // Return an  array that matches the array of names availables
  }
}

module.exports = Busquedas;
