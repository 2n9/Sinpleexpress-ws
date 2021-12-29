var express = require('express');
var app = express();

var http = require('http').Server(app);
http.on('error', function(e) {
    console.log(e);
    console.log('error');
    }
);

http.on('listening', function(e) {
    console.log(e);
    console.log('listening');
    }
);

app.use(express.static(__dirname + '/public'));

var port = process.argv[2] || 8080;
http.listen(port, function() {
    console.log('listening on *:' + port);
});
