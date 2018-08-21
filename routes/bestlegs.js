var express = require('express');
var router = express.Router();

router.get('/bestlegs', function (req, res) {
 
  
  
  res.render('bestlegs', {
    pageTitle: 'Best Legs',
  
    pageID: 'bestlegs'
  });
});

module.exports = router;