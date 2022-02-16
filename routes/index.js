const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('OK!');
});

/* ---------------------
 * Läs in sub-routes här
 * ---------------------
*/ 

module.exports = router;
