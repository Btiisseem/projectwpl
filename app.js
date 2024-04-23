const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index'); //landingpage
});

app.get('/login', (req, res) => {
  res.render('login ');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/main', (req, res) => {
  res.render('main');
});

app.get('/cardinfo', (req, res) => {
  res.render('cardinfo');
});

app.get('/cardinfodetail', (req, res) => {
  res.render('cardinfodetail');
});

app.get('/decklist', (req, res) => {
  res.render('decklist');
});

app.get('/deckdetail', (req, res) => {
  res.render('deckdetail');
});

app.get('/detail', (req, res) => {
  res.render('detail');
});




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
