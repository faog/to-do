const Task = require("./task");
require('colors');

class Tasks {
  _list = {
    'abc': 123
  };

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

  deleteTask(id = '') {
    if(this._list[id]){
      delete this._list[id]
    }
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

  listCompletedPendingTask(completed = true){
    let count = 0;
    this.listArray.forEach( task => {
      const { description, finished } = task;
      const status = ( finished ) ? 'Completed'.green : 'Pending'.red

      if( completed ) {
        if( finished ) {
          count += 1;
          console.log(`${(count +'.').green} ${description} :: ${finished.green}`)
        }
      } else {
        if( !finished ) {
          count += 1;
          console.log(`${(count +'.').green} ${description} :: ${status}`)
        }
      }  
    })
  }
  
  createTask(description = ''){
    const task = new Task(description);
    this._list[task.id] = task;
  }

  toggleCompletedTak( ids = []){
    ids.forEach( id => {
      const task = this._list[id];
      if(!task.finished){
        task.finished = new Date().toISOString();
      }
    });

    this.listArray.forEach( task => {
      if( !ids.includes(task.id)){
        this._list[task.id].finished = null;
      }
    });
  }
}

module.exports = Tasks;
