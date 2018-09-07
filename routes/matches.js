var express = require('express');
var router = express.Router();

router.get('/matches', function (req, res) {
 
  
  
  res.render('matches', {
    pageTitle: 'Matches',
    pageID: 'matches',
   
  
  });
});

module.exports = router;