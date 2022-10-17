
const colors = require('colors');

const createMenu = ()=>{

    return new Promise (resolve => {
            console.clear()
            console.log(`Program start: ${new Date()}`.blue);
            console.log('==============='.green)
            console.log(' Select Option '.green)
            console.log('===============\n'.green)
            console.log(`${'1.'.green} Create Task`)
            console.log(`${'2.'.green} List Tasks`)
            console.log(`${'3.'.green} List Complete Tasks`)
            console.log(`${'4.'.green} List Pending Tasks`)
            console.log(`${'5.'.green} Create Task(s)`)
            console.log(`${'6.'.green} Delete Task`)
            console.log(`${'7.'.green} Exit \n`)

            const readline = require('readline').createInterface({
                        
                        input:  process.stdin,
                        output: process.stdout
            });

            readline.question('Select Option: ' ,(option)=>{

                readline.close();
                resolve(option)

            });
    });
}

const pause = ()=>{

    return new Promise (resolve => {

        const readline = require('readline').createInterface({
                    
            input:  process.stdin,
            output: process.stdout
        });

        readline.question(`\nPress ${'Enter:'.green} to continue ` ,()=>{
                readline.close();
                resolve();
        });
   
    });

}


module.exports = {createMenu,pause}