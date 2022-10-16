const argv          = require("yargs")

                        .option('n',{
                                      alias:'n_keys',
                                      type: 'number',
                                      describe:'Length of the Key'
                        })
                        .option('l',{
                            alias:'listar',
                            type: 'boolean',
                            demandOption:true,
                            default: true,
                            describe:'Display or not Key in your terminal'
                         })
                        .check((argv,options)=>{
                            if(isNaN(argv.n)){ 
                                throw "La base tiene que ser un numero"
                            }

                            return true

                        })
                        .argv;

// 
// 'C:\\Program Files\\nodejs\\node.exe',
// 'C:\\Users\\Genio\\Documents\\INGENIERIA\\DEPARTAMENTO_IEE\\Curso_Node\\4_BasesNode\\app2',
// '--n_keys=10'
// ]
// Banderas por posicion
// const [, , arg3 = 'n_keys=12'] = process.argv;
// const [, n_keys=12]            = arg3.split('=');

// por defecto
// console.log(process.argv);
// console.log(argv);

module.exports = {argv}