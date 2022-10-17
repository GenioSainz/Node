const colors        = require('colors');
const {createMenu,pause} = require('./js/menu');
console.clear();


const main = async ()=>{
        
        let option = '';

        do{
            option = await createMenu();
            console.log({option});

            if (option !== '7') await pause();  // if option == 7 no await and program exit while loop

        }while(option !== '7')

        
         
};

main()