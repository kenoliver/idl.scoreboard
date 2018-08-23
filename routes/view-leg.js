var express = require('express');
var router = express.Router();

router.get('/view-leg', function (req, res) {
    res.redirect('/view-leg/1');
});
  
router.get('/view-leg/:leg', function (req, res) { 
    var leg = req.params.leg;

  res.render('view-leg', {
    pageTitle: 'View Leg',
    pageLeg: leg,
    pageID: 'view-leg'
  });
});

module.exports = router;


