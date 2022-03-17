const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer.js");
const Busquedas = require("./helpers/Models/Busquedas.js");

const main = async () => {
  // Here I'm importing my class to used It's methods

  const busquedas = new Busquedas();
  let opt;
  do {
    opt = await inquirerMenu();
    console.log({ opt });

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
