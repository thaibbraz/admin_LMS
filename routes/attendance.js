var express = require('express');
var router = express.Router();
const db = require ("../model/helper");

router.get('/', async function(req, res, next) {

    db (`SELECT * FROM attendance`)
    .then(results => {
       res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/", async function(req, res) {
    let { id_student, date, present} = req.body;
   
    try { 

        let sql = `INSERT INTO attendance ( id_student, date, present) 
        VALUES ('${id_student}','${date}','${present}')`;
 
        await db(sql);
   
     //return all students
     let results = "Attendance added"
     res.status(201).send(results.data);
   } catch (error) {
     res.status(500).send(error);
   }
  });
    
 module.exports = router;