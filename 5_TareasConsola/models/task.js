const {v4:uuidv4} =  require('uuid');

class TaskClass {

    id       = '';
    desc     = '';
    completeTime = null;

    constructor(desc){

        this.desc         = desc;
        this.id           = uuidv4();
        this.completeTime = null;

    }

}

module.exports = TaskClass;