const express = require('express');
require('dotenv').config(); //dotenv
const port = process.env.PORT;

//servir contenido estatico


const app  = express();

      app.use(express.static('./public-1'))
       
      // app.get('/', function (req, res) {
      //   res.send('Home Page')
      // });

      app.get('/date', function (req, res) {
        res.send(`Hello World Date: ${new Date()}`)  //date2
      });

      app.get('*', function (req, res) {
        res.sendFile(__dirname +'/public-1/404.html')
        console.log('Path Completo: ',__dirname)
      });

      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })