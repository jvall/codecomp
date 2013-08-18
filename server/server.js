var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use('/css', express.static(__dirname + '/site/css'));
app.use('/js', express.static(__dirname + '/site/js'));
app.use('/img', express.static(__dirname + '/site/img'));
app.use('/partials', express.static(__dirname + '/site/partials'))

// consider using redis for session store

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/site/index.html');
});

app.post('/api/grade', function(req, res) {
    console.log(JSON.stringify(req));
    console.log('\nuploaded to %s', req.files.source.path);
    res.send('Good!');
});

app.listen(3000);

