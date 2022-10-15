const { getUsuarioSync } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');

console.time('usuario1');
const usuario1 = getUsuarioSync( 1 );
console.log('Usuario 1:', usuario1 );
console.timeEnd('usuario1');


console.time('usuario2');
const usuario2 = getUsuarioSync( 2 );
console.log('Usuario 2:', usuario2 );
console.timeEnd('usuario2');


console.log('Fin de programa');
console.timeEnd('inicio');