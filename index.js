var fs = require('fs');
var https = require('https');
var express = require('express');
var app = express();

var port = 8181;
var httpsOptions = {
  key:  fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.crt'),
  ca:   fs.readFileSync('ssl/ca.key'),
  requestCert: true
};
 
function authorize(username, password) {
    return 'someone' === username & 'password' === password;
}
 
var auth = express.basicAuth(authorize);

app.use(httpsOptions);
app.get('/click', function(req, res) {
  res.send('Click!');
});
app.get('/status', function(req, res) {
  res.send('Unknown');
});
app.get('/temperature', function(req, res) {
  res.send('Unknown');
});
app.get('/history', function(req, res) {
  res.send('None');
});

 
console.log('Starting server on port ' + port + '...')
https.createServer(httpsOptions, app).listen(port);
