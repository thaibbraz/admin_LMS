var express = require('express');
var router = express.Router();
const db = require ("../model/helper");

/* GET links list. */
router.get('/', function(req, res, next) {
  let user_id = req.query.user_id;

  if(user_id === undefined){
    return res.send([]);
  }
  db (`SELECT * FROM links WHERE user_id = ${user_id}`)
  .then(results => {
     res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
  });

// GET ONE LINK
router.get("/:id", async function(req, res, next) {
  let linkId = req.params.id;
  try {
   let results =await db (`SELECT * FROM links WHERE id = ${linkId}`);
   
     if (results.data.length == 0) {    
      res.status(404).send ({error: "Link not found"});
    } else {
      res.send(results.data[0]);
    }
    } catch (error) {
      res.status(500).send(error) ({error: error.message});
    }
  });

  //Insert a new link into the dblinks

router.post("/", async function(req, res) {
  let { url, title, description, cat_id, user_id } = req.body;
 try { 
     let sql = `INSERT INTO links (url, title, description, cat_id, user_id) 
     VALUES ('${url}', '${title}', '${description}', ${cat_id}, ${user_id})`
     ;
     await db(sql);

//return all links
  let results = await db ("SELECT * FROM links")
  res.status(201).send(results.data);
} catch (error) {
  res.status(500).send(error);
}
});


// DELETE a link from the dblinks
router.delete("/:id", async function(req, res) {
let user_id = req.params.id;
try {
//Make sure link exists
  let results = await db(`DELETE FROM links WHERE id = ${user_id}`);
  results = await db (`SELECT * FROM links WHERE user_id = ${user_id}`);
  res.send(results.data);
} catch (error) {
  res.status(500).send({ error: err.message });
}});




module.exports = router;
