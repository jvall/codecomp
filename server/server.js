var express = require('express'),
    fs = require('fs'),
    sys = require('sys'),
    exec = require('child_process').exec;
var app = express();
var child;

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
    //console.log(req);
    console.log(req.files.file0.path);
    fs.rename(req.files.file0.path, './sources/team_problem_' + req.files.file0.name, function(err) {
        if (err) throw err;
        child = exec("bash exec_c.sh ./sources/team_problem_" + req.files.file0.name, function(error, stdout, stderr) {
            sys.print('stdout: ' + stdout);
        });
    });


    res.send("Good!");
});

app.listen(3000);

