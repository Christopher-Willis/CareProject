const express = require("express");
const router = express.Router();
const {list, create,update} = require('../controllers/thingController')

router.get('/things',list);
router.post('/things',create);
router.put("/things/:id", update);

module.exports =  router;