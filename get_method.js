var express = require('express');
var app = express();

app.get('/index', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/' + 'about.html')
})

app.get('/process_get', function(req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }

    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8000, function() {
    var host = server.address().address
    var port = server.address().port

    console.log(host, port);
})