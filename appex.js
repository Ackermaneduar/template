const express = require('express')
const app = express()
const port = 8080;

//servir contenido estatico
app.use(express.static('roadtrip'));

app.get('/index', function (req, res) {
  res.send('/roadtrip/index.html')
});

app.get('/holamundo', function (req, res) {
    res.send('Hola mundo con ruta')
  });
  app.get('*', (req, res) =>{
    res.sendFile(__dirname+'/public/404.html')
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
