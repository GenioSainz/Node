console.clear()
console.log('======================================')
console.time('Time');
console.log("Inicio de Programa");

setTimeout( ()=> { console.log("1 TimeOut"); }, 250);
setTimeout( ()=> { console.log("2 TimeOut"); }, 500);
setTimeout( ()=> { console.log("3 TimeOut"); }, 750);

console.log("Fin de Programa");
console.timeEnd('Time');