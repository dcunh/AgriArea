var express = require('express');
var router = express.Router();
var agriareaModel = require("../models/produto");

/* GET all agriarea */
router.get('/', async function(req, res, next){
    let filterObj = req.query;
    let result = await agriareaModel.getAll(filterObj);
    res.status(result, status).send(result.data);
});

module.exports = router;