const conn=require('../config/dbConnection');
const jwt=require('jsonwebtoken');

//get
exports.readData=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let sql = "SELECT * FROM companydb";
          let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });
  
        }
    }) 
};

//post
exports.createNew=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let data = {id: req.body.id, name: req.body.name, logo: req.body.logo, location: req.body.location, description:req.body.description};
          let sql = "INSERT INTO companydb SET ?";
          let query = conn.query(sql, data,(err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });
  
        }
    }) 
};

//update
exports.updateData=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let sql = "UPDATE companydb SET name='"+req.body.name+"', logo='"+req.body.logo+"',location='"+req.body.location+"',description='"+req.body.description+"' WHERE id="+req.params.id;
          let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });

        }
    }) 
};

//delete
exports.deleteData=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let sql = "DELETE FROM companydb WHERE id="+req.params.id+"";
          let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });

        }
    }) 
};


//==========================hire


exports.readDataHire=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let sql = "SELECT * FROM hire";
          let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });
  
        }
    }) 
};

//post
exports.createNewHire=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let data = {id_project: req.body.id_project, project_name: req.body.project_name, description: req.body.description, email_eng: req.body.email_eng, email_com: req.body.email_com, status:req.body.status};
          let sql = "INSERT INTO hire SET ?";
          let query = conn.query(sql, data,(err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });
  
        }
    }) 
};

//update
exports.updateDataHire=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let sql = "UPDATE hire SET project_name='"+req.body.project_name+"', description='"+req.body.description+"',email_eng='"+req.body.email_eng+"',email_com='"+req.body.email_com+"',status='"+req.body.status+"' WHERE id_project="+req.params.id_project;
          let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });

        }
    }) 
};

//delete
exports.deleteDataHire=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let sql = "DELETE FROM hire WHERE id_project="+req.params.id_project+"";
          let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });

        }
    }) 
};

exports.myproject=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
          let sql = `SELECT * FROM hire WHERE email_com='${req.params.email_com}'`;
          let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });
  
        }
    }) 
};