var express = require('express')
var path = require('path')
var app = express()

app.set('port', process.env.PORT || 5000);

app.use('/public', express.static(__dirname+'/public'));
app.use('/static', express.static(__dirname+'/static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// custom 404 page
app.use(function (req, res, next) {
    res.type('text/html');
    res.status(404);
    res.send('<h1>404 - Not Found</h1>');
});

// custom 500 page
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});