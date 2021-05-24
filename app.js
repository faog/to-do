require('colors');

const { confirm, inquirerMenu, deleteListTask, pause, readInput, showChecklistTask } = require('./helpers/inquirer');
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
        tasks.fullList();
        break;
      }
      case '3': {
        tasks.listCompletedPendingTask(true);
        break;
      }
      case '4': {
        tasks.listCompletedPendingTask(false);
        break;
      }
      case '5': {
        const ids = await showChecklistTask(tasks.listArray);
        tasks.toggleCompletedTak( ids );
        break;
      }
      case '6': {
        const id = await deleteListTask(tasks.listArray);
        if ( id !== '0'){
          const confirmDelete = await confirm('Are your sure?');
          if (confirmDelete) {
            tasks.deleteTask(id);
            console.log('Task delete');
          }
        }
        break;
      }
    }

    saveDB(tasks.listArray);

    await pause();

  } while (option != '7');
};

main();
