const Task = require("./task");
require('colors');

class Tasks {
  _list = {};

  get listArray() {
    const list = [];
    Object.keys(this._list).forEach(key => {
      const task = this._list[key]
      list.push(task)
    })
    return list;
  }

  constructor() {
    this._list = {};
  }

  loadTaskFromArray( tasks = []) {
    tasks.forEach(task => {
      this._list[task.id] = task;
    })
  }

  fullList() {
    this.listArray.forEach( (task, id) => {
      const idx = id +1;
      const { description, finished } = task;

      const status = ( finished ) ? 'Completed'.green : 'Pending'.red

      console.log(`${idx}. ${description} :: ${status}`)
    })
  }

  createTask(description = ''){
    const task = new Task(description);
    this._list[task.id] = task;
  }
}

module.exports = Tasks;
