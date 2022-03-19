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

    const getParamsMapBox = () => {
      return {
        access_token: process.env.MAPBOX_KEY,

        language: "es",
        proximity: "ip",
      };
    };

    console.log("Ciudad:", lugar);
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
      params: getParamsMapBox(),
    });
    const resp = await instance.get();
    console.log(resp.data);

    return [resp.data.per_page]; // Return an  array that matches the array of names availables
  }
}

module.exports = Busquedas;
