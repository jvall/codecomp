var express = require('express');
var app = express();

// consider using redis for session store

app.get('/', function(req, res) {
    res.send("Hi there!");
});

app.listen(3000);

