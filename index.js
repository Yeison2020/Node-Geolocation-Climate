const { leerInput } = require("./helpers/inquirer.js");

const main = async () => {
  const text = await leerInput("Hello World Yeison");
  console.log(text);
};
