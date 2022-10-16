
const {randKeyMain} = require('./fun/keys.js');
const {argv}        = require('./yargs_config/yargs');
const colors        = require('colors');

console.clear()

randKeyMain(argv.n,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado') )
    .catch( err => console.log(err));
