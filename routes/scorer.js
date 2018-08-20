var express = require('express');
var router = express.Router();

router.get('/scorer', function (req, res) {
 
  
  res.render('scorer', {
    pageTitle: 'Darts Scoreboard',
    pageID: 'dartsScoreboard'
  });
});

module.exports = router;