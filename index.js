const express = require('express');
const cors = require('cors');// для api с другими сайтами
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const account = require('./routes/account');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

//подключение статической папки
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
  console.log('Успешное подключение к Базе Данных!');
});

mongoose.connection.on('error', (err) => {
  console.log('Нет подключения к Базе Данных ' + err);
});

app.get('/',(req, res) =>{
  res.send('Главная страница сайта!!!');
});

app.use('/account', account);

app.listen(port, () =>{
  console.log('Сервер запущен по порту: ' + port);
});