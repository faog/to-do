require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const { readDB, saveDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

const main = async() => {

  let option = '';

  const tasks = new Tasks();

  const tasksDB = readDB();

  if(tasksDB){
    tasks.loadTaskFromArray(tasksDB);
  }

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

    saveDB(tasks.listArray);

    await pause();

  } while (option != '7');
};

main();
