var express = require('express');
var router = express.Router();
var User = require('../models/User')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('娜姐是个pig');
});

router.get('./getUserList',function(req,res,next){

  res.send('hello')

})


module.exports = router;