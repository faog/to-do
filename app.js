require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

const main = async() => {

  let option = '';

  const tasks = new Tasks();

  do {
    option = await inquirerMenu();

    switch (option) {
      case '1': {
        let description = await readInput('Description:');
        tasks.createTask(description);
        break;
      }
      case '2': {
        console.log(tasks.listArray);
        break;
      }
    }
    await pause();

  } while (option != '7');
};

main();
