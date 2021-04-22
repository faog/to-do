const { v4: uuidv4 } = require('uuid');

class Task {
  id = '';
  description = '';
  finished = null;

  constructor ( description ){
    this.id = uuidv4();
    this.description = description;
    this.finished = null;
  }
}

module.exports = Task;
