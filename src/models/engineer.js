const conn=require('../config/dbConnection');
const jwt=require('jsonwebtoken');

module.exports={
    //get
    readData:(req,res)=>{
        jwt.verify(req.token,'my_secret_key',(err,data)=>{
            if(err) res.sendStatus(403);
            else{
            let sql = "SELECT * FROM engineerdb";
            let query = conn.query(sql, (err, results) => {
                if(err) throw err;
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });

            }
        }) 
    },

 //get 1 data
 readOneData:(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
        let sql = "SELECT * FROM engineerdb WHERE email='"+req.params.email+"'";
        let query = conn.query(sql, (err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
            });

        }
    }) 
},

    //post
    createNew:(req,res)=>{
        jwt.verify(req.token,'my_secret_key',(err,data)=>{
            if(err) res.sendStatus(403);
            else{
            let data = {id: req.body.id, name: req.body.name, description: req.body.description, skill: req.body.skill, location:req.body.location, birth:req.body.birth, showcase:req.body.showcase, created:new Date(), updated:new Date(), email: req.body.email};
            let sql = "INSERT INTO engineerdb SET ?";
            let query = conn.query(sql, data, (err, results) => {
                if(err) throw err;
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });

            }
        }) 
    },

    //update
    updateData:(req,res)=>{
        jwt.verify(req.token,'my_secret_key',(err,data)=>{
            if(err) res.sendStatus(403);
            else{
                let data={id:req.body.id, name: req.body.name, description: req.body.description, skill: req.body.skill, location:req.body.location, birth:req.body.birth, showcase:req.body.showcase, updated:new Date(), email:req.params.email};
                let sql = "UPDATE engineerdb SET ? WHERE email='"+req.params.email+"'";
                let query = conn.query(sql, data, (err, results) => {
                    if(err) throw err;
                    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });

            }
        }) 
    },

    //delete
    deleteData:(req,res)=>{
        jwt.verify(req.token,'my_secret_key',(err,data)=>{
            if(err) res.sendStatus(403);
            else{
            let sql = "DELETE FROM engineerdb WHERE email="+req.params.email+"";
            let query = conn.query(sql, (err, results) => {
                if(err) throw err;
                res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
                });

            }
        }) 
    }
}