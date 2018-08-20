var express = require('express');
var router = express.Router();

router.get('/new-game', function (req, res) {
 
  
  res.render('new-game', {
    pageTitle: 'New Game',
    pageID: 'new-game'
  });
});

module.exports = router;