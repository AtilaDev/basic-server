require('./config/config');
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', { nombre: 'PRUEBA' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
