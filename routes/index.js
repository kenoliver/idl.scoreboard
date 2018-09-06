var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
 
  
  res.render('index', {
    pageTitle: 'Main Menu',
    pageID: 'index',
    
    pagetest: 'test'
  });
});

module.exports = router;