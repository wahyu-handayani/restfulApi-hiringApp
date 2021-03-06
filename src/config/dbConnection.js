require('dotenv').config();
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});


module.exports=conn;