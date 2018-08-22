var express = require('express');
var router = express.Router();

router.get('/addplayer', function (req, res) {
 
  
  res.render('addplayer', {
    pageTitle: 'Add Player',
    pageID: 'addplayer'
  });
});

module.exports = router;