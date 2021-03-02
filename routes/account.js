const express = require('express');
const router = express.Router();
const User = require('../models/user');

// router.get('/reg',(req, res) =>{
//   res.send('Страница регистрации');
// });

router.post('/reg',(req, res) =>{
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    login: req.body.login,
    password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if(err)
      res.json({success: false, msg: 'Пользователь не был добавлен'});
    else
      res.json({success: true, msg: 'Пользователь был добавлен!'});
  });
});

router.get('/auth',(req, res) =>{
  res.send('Страница авторизации');
});

router.get('/dashboard',(req, res) =>{
  res.send('Кабинет пользователя');
});

module.exports = router;