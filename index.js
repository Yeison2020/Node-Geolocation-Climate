const { leerInput, inquirerMenu } = require("./helpers/inquirer.js");

const main = async () => {
  let opt;
  do {
    opt = inquirerMenu;
  } while (opt !== 0);
};

main();
