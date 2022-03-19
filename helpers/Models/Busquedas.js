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
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?proximity=ip&language=es&access_token=pk.eyJ1IjoieWVpc29uNjk1IiwiYSI6ImNsMHkwNzF6ODF3OTAzY3A0MTYwcnkwYm8ifQ.8KheJHm4b8znESJHQnbpqw`,
    });
    const resp = await axios.get("");
    console.log(resp.data);

    return [resp.data.per_page]; // Return an  array that matches the array of names availables
  }
}

module.exports = Busquedas;
