const express = require("express");
const router = express.Router();
const {list, create} = require('../controllers/tradeAndTimeController')

router.get('/tradeandtimes',list);
router.post('/tradeandtimes',create);
router.put("/tradeandtimes/:id", update);

module.exports =  router;