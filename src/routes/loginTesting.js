const login=require('../controllers/welcome');
const ensureToken=require('../helper/middlewareEnsureToken');
const express=require('express');
const app=express.Router();

app.get('/api',login.myApi);
app.get('/api/protected',ensureToken,login.protection);
app.post('/regis',login.newRegis);
//app.get('/hapus',login.hapus)
app.post('/loginUser',login.newLogin);
//app.post('/loginUser2',login.newLogin2);
module.exports = app;

