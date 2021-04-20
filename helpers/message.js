require('colors');

const showMenu = () => {
  return new Promise ( resolve => {
    console.clear();
    console.log('========================'.rainbow);
    console.log('   Select a option');
    console.log('========================\n'.rainbow);

    console.log(`${ '1.'.blue.bold } Create a task`);
    console.log(`${ '2.'.blue.bold } List tasks`);
    console.log(`${ '3.'.blue.bold } List completed tasks`);
    console.log(`${ '4.'.blue.bold } List pending tasks`);
    console.log(`${ '5.'.blue.bold } Complete task(s)`);
    console.log(`${ '6.'.blue.bold } Delete task`);
    console.log(`${ '0.'.blue.bold } Leave \n`);

    const readline = require('readline').createInterface({
      input: process.stdin, 
      output: process.stdout
    });

    readline.question('Select a option: ', (opt) => {
      readline.close();
      resolve(opt);
    })
  })  
}

const pause = () => {
  return new Promise (resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin, 
      output: process.stdout
    });
  
    readline.question(`Press ${'Enter'.blue.bold} to continue\n`, () => {
      readline.close();
      resolve();
    })
  })
}

module.exports = {
  showMenu,
  pause
}