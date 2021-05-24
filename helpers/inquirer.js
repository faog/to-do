const inquirer = require('inquirer');
require('colors');

const questionsMenu = [
  {
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: [
      {
        value: '1',
        name: '1. Create a task'
      },
      {
        value: '2',
        name: '2. List tasks'
      },
      {
        value: '3',
        name: '3. List completed tasks'
      },
      {
        value: '4',
        name: '4. List pending tasks'
      },
      {
        value: '5',
        name: '5. Complete task(s)'
      },
      {
        value: '6',
        name: '6. Delete task'
      },
      {
        value: '7',
        name: '7. Leave'
      }
    ]
  }
];

const inquirerMenu = async() => {
  console.clear();
  console.log('========================'.rainbow);
  console.log('   Select a option');
  console.log('========================\n'.rainbow);

  const { option } = await inquirer.prompt(questionsMenu);

  return option;
};

const pause = async() => {

  const question = [{
    type: 'input',
    name: 'enter',
    message: `Press ${'Enter'.blue.bold} to continue`
  }];
  console.log('\n');
  await inquirer.prompt(question);
};

const readInput = async(message) => {
  const question = [
    {
      type: 'input',
      name: 'description',
      message,
      validate(value) {
        if(value.length === 0) {
          return 'Please, enter a value';
        }
        return true;
      }
    }
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

const deleteListTask = async(tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx =  `${i + 1}.`.green;
    return {
      value: task.id,
      name: `${idx} ${task.description}`
    };
  });

  choices.unshift({
    value: '0',
    name: '0.'.green + ' Cancel'
  });

  const question = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices
    }
  ];
  const { id } = await inquirer.prompt(question);
  return id;
};

const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

const showChecklistTask = async(tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx =  `${i + 1}.`.green;
    return {
      value: task.id,
      name: `${idx} ${task.description}`,
      checked: (task.finished) ? true : false
    };
  });

  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Select',
      choices
    }
  ];
  const { ids } = await inquirer.prompt(question);
  return ids;
};

module.exports = {
  confirm,
  inquirerMenu,
  deleteListTask,
  pause,
  readInput,
  showChecklistTask
};
