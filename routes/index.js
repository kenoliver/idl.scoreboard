var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  var matches  = require("fs").readFileSync("./data/matches.json").toString();
  
  
  res.render('index', {
    pageTitle: 'Main Menu',
    pageID: 'index',
    pageMatches : matches,
    pagetest: 'test'
  });
});

module.exports = router;