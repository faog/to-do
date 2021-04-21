require('colors');

const { inquirerMenu, pause } = require('./helpers/inquirer');

console.clear();

const main = async() => {

  let opt = '';
  do {
    opt = await inquirerMenu();
    console.log({opt});

    await pause();

  } while (opt.option != '7');
}

main();