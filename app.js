var express = require('express');
var favicon = require('serve-favicon');
var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(favicon('public/resources/logos/favicon.ico'));
app.use(require('./routes/index'));
app.use(require('./routes/new-game'));
app.use(require('./routes/scorer'));
app.use(require('./routes/stats'));
app.use('/public',express.static('public'));
var server = app.listen(app.get('port'),function(){
    console.log('Listening on port ' + app.get('port'));
});