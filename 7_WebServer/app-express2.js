const express = require('express');

require('dotenv').config(); //dotenv
const port = process.env.PORT;

//servir contenido estatico


const app     = express();

      app.use(express.static('./public-2'))
       
      // app.get('/', function (req, res) {
      //   res.send('Home Page')
      // });

      app.get('/generic', function (req, res) {
        res.sendFile(__dirname + '/public-2/generic.html')
      });

      app.get('/elements', function (req, res) {
        res.sendFile(__dirname + '/public-2/elements.html')
      });

      app.get('*', function (req, res) {
        res.sendFile(__dirname +'/public-1/404.html')
        console.log('Path Completo: ',__dirname)
      });

      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })