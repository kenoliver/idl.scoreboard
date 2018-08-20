var express = require('express');
var router = express.Router();

router.get('/stats', function (req, res) {
 
  var stats = [
    {
      title:"3 DARTS AVG",
      id:"avg"
    },{
      title:"FIRST 9 AVG",
      id:"avg9"
    },{
      title:"DOUBLES SUCCESS %",
      id:"doubles"
    },{
      title:"60+",
      id:"sixty"
    },{
      title:"100+",
      id:"tonne"
    },{
      title:"140+",
      id:"tonne40"
    }, {
      title:"180s",
      id:"tonne80"
    },{
      title:"HI CHECK-OUT",
      id:"checkout"
    },{
      title:"BEST LEG",
      id:"bestleg"
    },{
      title:"WORST LEG",
      id:"worstleg"
    },{
      title:"AVGLEG",
      id:"avgleg"
    }
    ]
  
  res.render('stats', {
    pageTitle: 'Stats',
    pageFields: stats,
    pageID: 'stats'
  });
});

module.exports = router;