const jwt=require('jsonwebtoken');
const schema=require('../helper/loginValidation')
const bcrypt = require('bcryptjs');
const conn=require('../config/dbConnection');

exports.myApi=(req,res)=>{
    res.json({
        text:'my api'
    })
};

exports.protection=(req,res)=>{
    jwt.verify(req.token,'my_secret_key',(err,data)=>{
        if(err) res.sendStatus(403);
        else{
            res.json({
                text:'this is protected',
                data:data
            })
        }
    }) 
};

// exports.newLogin=(req, res) => {
//     //begin to validate
//     const {error}=schema.validate(req.body);
//     if(error) return res.status(400).send(error.details[0].message);
//     let user={email:req.body.email};
//     let token=jwt.sign({user},'my_secret_key')
//     let data = {email: req.body.email, password: req.body.password, token:token};
//     let sql = "INSERT INTO login SET ?";
//     let query = conn.query(sql, data,(err, results) => {
//         if(err) throw err;
//         res.send(JSON.stringify({"status": 200, "error": null, "response": data}));
//     });

//INI REGISS
    exports.newRegis=(req, res) => {
        //begin to validate
        const {error}=schema.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        let user={email:req.body.email};
        let token=jwt.sign({user},'my_secret_key')
        let data = {email: req.body.email, password: req.body.password, position: req.body.position};
        let sql = "INSERT INTO login SET ?";
        let query = conn.query(sql, data,(err, results) => {
            if(err) throw err;
            res.send(JSON.stringify({"status": 200, "error": null, "response": "Registered"}));
            
        });
};


// exports.newLogin = function(req, res) {
//     let email = req.body.email;
//     let password = req.body.password;
//     let sql = 'SELECT * FROM login WHERE email=?';
//     conn.query(sql, [email, password], function(err, rows) {
//         if (!err) {
//             if (rows.length > 0) {
//                 if (password) {
//                     token = jwt.sign(JSON.parse(JSON.stringify(rows[0])), 'my_secret_key', {
//                         expiresIn: 3600
//                     });
//                     res.json({
//                         "token": token,
//                     });

//                 } else {
//                     res.json({
//                         "success": false,
//                         "message": "Can not log in",
//                         "email": email
//                     });

//                 }
//             }
//         } else
//             console.log(err);

//     });
// }


exports.newLogin = function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let position=req.body.position;
    let sql = 'SELECT * FROM login WHERE email=?';
    conn.query(sql, [email], function(err, results) {
        //console.log(results.)
        if(err) throw err;
        else{
            if (results[0].email==email && results[0].password==password && results[0].position==position){
                token = jwt.sign(JSON.parse(JSON.stringify(results[0])), 'my_secret_key', {
                    expiresIn: 3600
                });
                res.json({
                    "token": token,
                });   
            }else res.send('input email, password, and position correctly')
        }

    });
}
//tambahin kondisi where email=...and position=...


