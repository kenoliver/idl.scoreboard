var express = require('express');
var router = express.Router();

router.get('/checkouts', function (req, res) {
 
  
  
  res.render('checkouts', {
    pageTitle: 'Checkouts',
  
    pageID: 'checkouts'
  });
});

module.exports = router;