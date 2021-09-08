var express = require('express');
var router = express.Router();
const db = require ("../model/helper");

router.get("/", async function (req, res, next) {
      db(`SELECT * FROM cohorts ORDER BY name`)
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });
    
  

  module.exports = router;