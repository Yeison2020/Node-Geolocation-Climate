require("dotenv").config();
const {
  leerInput,
  inquirerMenu,
  pausa,
  listadrLugares,
} = require("./helpers/inquirer.js");
const Busquedas = require("./helpers/Models/Busquedas.js");

const main = async () => {
  // Here I'm importing my class to used It's methods

  const busquedas = new Busquedas();
  let opt;
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        // Show message
        const lugar = await leerInput("Ciudad:");
        // Search places
        const places = await busquedas.ciudad(lugar);
        // Chose the place
        const id = listadrLugares(places);
        // console.log({ id });

        // Weather data

        // Show those results
        console.log("\n Information de la ciudad\n".green);
        console.log("Ciudad:");
        console.log("Lat:");
        console.log("Lng:");
        console.log("Tempertura:");
        console.log("Minima:");
        console.log("Maxima:");

        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
