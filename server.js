var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

app.post('/', function(req, res) {
    console.log('Got a POST request for the homepage');
    res.send('Hello POST');
})

// app.delete('/delete_user', function(req, res) {
//     console.log('Got a DELETE request for /del_user');
//     res.send('Hello DELETE');
// })

app.get('/list_user', function(req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Listing user');
})

// app.get('/ab*cd', function(req, res) {
//     console.log('Got a GET request for /ab*cd');
//     res.send('Page Pattern Match');
// })


var server = app.listen(1230, function() {
    var host = server.address().address
    var port = server.address().port

    console.log(host, port);
})