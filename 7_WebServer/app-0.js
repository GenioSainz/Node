console.clear()
console.log(`==============================`)
console.log(`START APP => ${new Date()} \n`)

const http = require('http');
const { sensitiveHeaders } = require('http2');
const port = 8082;


// request lo que se solicita 
// response respuesta del procesado de la request 
http.createServer((req, res) => {

        console.log(req)

        // res.writeHead(200, { 'Content-Type': 'application/json' });// text/plain  application/csv

        // let salida = {
        //     fecha: new Date(),
        //     nombre: 'fernando',
        //     edad: 32,
        //     url: req.url}

        // res.write(JSON.stringify(salida));
        // res.end();

        res.setHeader('Content-Disposition','attachment; filename=lista.csv');
        res.writeHead(200, { 'Content-Type': 'application/csv' });

        res.write('id, name\n');

        for(let i=0;i<=5;i++){
            res.write(`${i+1}, ${Math.random()}\n`);
        }

        res.end()
        

    })
    .listen(port);
    console.log(`Escuchando el puerto ${port}`);