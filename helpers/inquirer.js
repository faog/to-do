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

module.exports = {
  inquirerMenu,
  pause,
  readInput
};
