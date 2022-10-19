const colors               = require('colors');
const {inquirerMenu,pause,readInput} = require('./js/menuInquirer');
const { saveDB, readDB } = require('./js/saveFile');
const TasksClass = require('./models/tasks');

console.clear();

const main = async ()=>{
        
        let option = '';
        const tasks = new TasksClass();

        const tasksDB = readDB();

        //await pause();

        if ( tasksDB ) { 

            tasks.loadTasksFromArray( tasksDB );

        }

        do{
          
            option = await inquirerMenu();

            switch(option){
                case '1':
                    
                const descripcion = await readInput('Insert Description');

                tasks.createTask(descripcion);
            
                break

                case '2':
                //console.log(tasks.listArr)
                tasks.completeList()
                break

                case '3':
                //list complete
                tasks.listPendingOrFulfilled(true)
                break

                case '4':
                //list pending
                tasks.listPendingOrFulfilled(false)
                break
            }

            saveDB(tasks.listArr)
       

            await pause()

        }while(option !== '7')

        
         
};

main()