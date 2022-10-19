
const inquirer = require('inquirer');
const colors   = require('colors');

const inquirerMenu = async ()=>{

    console.clear();
    console.log('===================================================================================================='.green)
    console.log(`${'SELECT OPTION'.green} ${` Program start: ${new Date()}`.green}`)
    console.log('====================================================================================================\n'.green)

    const  menuQuestions = [

        {
             type:'list',
             name:'option',
             message:'Select Option',
             choices:[
 
                 {value: '1',
                  name:'1. Create Task'},
 
                 {value: '2',
                  name:'2. List Tasks'},
 
                 {value: '3',
                  name:'3. List Complete Tasks'},
 
                 {value: '4',
                  name:'4. List Pending Tasks'},
 
                 {value: '5',
                  name:'5. Create Task(s)'},
 
                 {value: '6',
                  name:'6. Delate Task'},
 
                 {value: '7',
                  name:'7. Exit\n'},
             ]
        }
    ];
    
    const {option} = await inquirer.prompt(menuQuestions)

    return option

}

const pause = async ()=>{

    const input = [
        {
          type:'input',
          name:'Enter',
          message:`Press ${'ENTER'.green} to continue`
        }
    ];

    console.log('\n')
    await inquirer.prompt(input)

}

const readInput = async (message) =>{

    const input = [
        {
          type:'input',
          name:'description',
          message:message,
          validate (value){

            if(value.length === 0){

                return 'Return a correct value';

            }else{

                return true
            }
          }
        }
    ];

   
    const {description} = await inquirer.prompt(input);

    return description


}



module.exports = {
                    inquirerMenu,
                    pause,
                    readInput
                }

