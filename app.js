require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors=require('cors');
app.options('*', cors())

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

const login=require('./src/routes/loginTesting');
const server=require('./src/routes/user');
// parse application/json
app.use(bodyParser.json());
app.use('/',login);
app.use('/',server);


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });





app.listen(process.env.PORT,() =>{
    console.log('Server is running...');
  });