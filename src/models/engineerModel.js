const conn=require('../config/dbConnection');

module.exports={
  sortName:(req,res)=>{
    new Promise((resolve, reject) => {
    let sql = "SELECT * FROM engineerdb ORDER BY name";
    let query = conn.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(res.send(JSON.stringify({"status": 200, "error": null, "response": results})));
    });
  })
},

sortUpdated:(req,res)=>{
    new Promise((resolve, reject) => {
    let sql = "SELECT * FROM engineerdb ORDER BY updated";
    let query = conn.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(res.send(JSON.stringify({"status": 200, "error": null, "response": results})));
    });
})
},

searchSkill:(req,res)=>{
    new Promise((resolve, reject) => {
    let search= req.query.skill
    let sql = `SELECT * FROM engineerdb WHERE skill LIKE '%${search}%'`;
    let query = conn.query(sql, (err, results) => {
      if(err) reject(err);
      resolve(res.send(JSON.stringify({"response": results})));
    });
})
},

searchEngineerName: (str) =>{
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM engineerdb WHERE name LIKE '%${str.name}%'`,(err, result) => {
      if(result!='') resolve(result)
      else reject(err)
    })
  })
},

getAllUser: (req,res) => {
  return new Promise ((resolve, reject) => {
    let limit= parseInt(req.query.limit)
    let offset= parseInt(req.query.offset)
      conn.query (`SELECT * FROM engineerdb LIMIT ${limit} OFFSET ${offset}`, (err, response) => {
        if (!err) resolve (res.send(JSON.stringify({"response": response})));
        else reject (err);
      });
    });
},


getDataCombin: (page,limit,sortby,search,order) =>{
  let offset= (page-1)*limit
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM engineerdb WHERE name LIKE '%${search}%' ORDER BY ${sortby} ${order} LIMIT ?,?  `, [offset,limit], (err, result) => {
      if(result!='') resolve(result)
      else reject(err)
      })
  })
}

}
