var express = require('express');
var router = express.Router();

router.get('/new-game', function (req, res) {
  var leaguePlayers = req.app.get('appLeaguePlayers');
  
  res.render('new-game', {
    pageTitle: 'New Game',
    pageLeaguePlayers: JSON.stringify(leaguePlayers).replace(/'/g, "\\'"),
    pageID: 'new-game'
  });
});

module.exports = router;