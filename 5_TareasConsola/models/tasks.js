
const TaskClass   =  require('./task');

//  _list :
//         {uuid-17261518-1817625: { id:12, descripcion:'.....', completeIN:'....'}}
//         {uuid-17261518-1817625: { id:13, descripcion:'.....', completeIN:'....'}}
//         {uuid-17261518-1817625: { id:14, descripcion:'.....', completeIN:'....'}}
//         {uuid-17261518-1817625: { id:15, descripcion:'.....', completeIN:'....'}}


class TasksClass {

    _list = {};

    get listArr() {
        
        // transform objet task to array
        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    constructor(){
        this._list = {};
    }

    loadTasksFromArray( tasks = [] ) {
        
        tasks.forEach( task => {
            this._list[task.id] = task;
        });
    }

    createTask(descripcion = ''){

        const task = new TaskClass(descripcion)

        this._list[task.id] = task;
    }

    completeList(){

        console.log('\n')

        this.listArr.forEach( (task, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completeTime } = task;
            const estate = ( completeTime) 
                                ? 'Fulfilled'.green
                                : 'Pending'.red;
         
            console.log(`${ idx } ${ desc } => ${ estate }`);

        });    
    };

    listPendingOrFulfilled( Fulfilled = true ){

        console.log();
        let cont = 0;
        this.listArr.forEach( task => {

            const { desc, completeTime } = task;
            const estate = ( completeTime ) 
                            ? 'Fulfilled'.green
                            : 'Pending'.red;

            if ( Fulfilled ) {
                // mostrar completadas
                if ( completeTime) {
                    cont += 1;
                    console.log(`${ (cont + '.').green } ${ desc } => ${estate}`);
                }
            } else {
                // mostrar pendientes
                if ( !completeTime ) {
                    cont += 1;
                    console.log(`${ (cont + '.').green } ${ desc } => ${estate }`);
                }
            }

        }); 


    }



}

module.exports = TasksClass
