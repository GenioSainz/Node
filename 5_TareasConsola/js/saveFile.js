
const fs = require('fs');

const filename = './data/data.json';

const saveDB = (data) =>{

    const array2string = JSON.stringify(data);

    fs.writeFileSync(filename,array2string);

};

const readDB = ()=>{

    if( !fs.existsSync(filename) ){
        return null;
    }
    
    const info = fs.readFileSync(filename, { encoding: 'utf-8' });
    const data = JSON.parse( info ); // transform to object

    // console.log(data);

    return data;

}

module.exports = {

    saveDB,
    readDB

}
