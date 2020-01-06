const engineerData=require('../models/engineer');
const companyData=require('../models/company');
const ensureToken=require('../helper/middlewareEnsureToken');
const searchEngineer= require('../controllers/engineer')

const model=require('../models/engineerModel');

const express=require('express');
const app=express.Router();

app.get('/search', searchEngineer.search)
app.get('/sort', searchEngineer.combination)



app.get('/searchSkill',model.searchSkill);
app.get('/paginate',model.getAllUser);


app.get('/sortData/:name',model.sortName);
app.get('/sortData/:updated',model.sortUpdated);

app.get('/engineer/:email',ensureToken,engineerData.readOneData);
app.get('/engineer',ensureToken,engineerData.readData);
app.post('/engineer',ensureToken,engineerData.createNew);
app.put('/engineer/:email',ensureToken,engineerData.updateData);
app.delete('/engineer/:email',ensureToken,engineerData.deleteData);

app.get('/company',ensureToken,companyData.readData);
app.post('/company',ensureToken,companyData.createNew);
app.put('/company/:id',ensureToken,companyData.updateData);
app.delete('/company/:id',ensureToken,companyData.deleteData);


app.get('/companyproject',ensureToken,companyData.readDataHire);
app.post('/companyproject',ensureToken,companyData.createNewHire);
app.put('/companyproject/:id_project',ensureToken,companyData.updateDataHire);
app.delete('/companyproject/:id_project',ensureToken,companyData.deleteDataHire);
app.get('/companyproject/:email_com',ensureToken,companyData.myproject);

//app.post('/loginUser', controller.loginUser)
module.exports = app;

