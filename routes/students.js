var express = require('express');
var router = express.Router();
const db = require ("../model/helper");
const saltRounds = 10;
// router.get("/", async function (req, res, next) {
//       db(`SELECT * FROM students`)
//       .then(results => {
//         console.log(results.data)
//         res.send(results.data);
//       })
//       .catch(err => res.status(500).send(err));
//   });
  
/* GET links list. */
  router.get('/', async function(req, res, next) {
  let cohort_name = req.query.user_id;
 console.log("here:",cohort_name)
  db (`SELECT * FROM students WHERE cohort_name = '${cohort_name}'`)
  .then(results => {
     res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  });

  router.post("/", async function(req, res) {
    let { name, surname, cohort_name} = req.body;
   try { 
      //  

       let sql = `INSERT INTO students ( name, surname, password, cohort_name) 
       VALUES ('${name}','${surname}','${cohort_name}')`;

       await db(sql);
  
  //return all students
    let results = await db("SELECT * FROM students")
    res.status(201).send(results.data);
   res.status(201).send("deu")
  } catch (error) {
    res.status(500).send(error);
  }
 });

 router.get('/attendance', async function(req, res, next) {

  db (`SELECT * FROM attendance`)
  .then(results => {
     res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  });

 module.exports = router;