var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/post_method', function(req, res) {
    res.sendFile(__dirname + '/' + 'post_method.html');
});

app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
        FirstName: req.body.first_name,
        LastName: req.body.last_name
    }

    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8001, function() {
    var host = server.address().address
    var port = server.address().port

    console.log(host, port);
})