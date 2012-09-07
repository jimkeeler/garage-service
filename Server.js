var fs = require('fs');
var https = require('https');
var express = require('express');
var ApiBuilder = require('./ApiBuilder').ApiBuilder;

function Server() {
  this.port = 9000;
  this.options = {
    ca:          fs.readFileSync('ssl/ca.key'),
    key:         fs.readFileSync('ssl/server.key'),
    cert:        fs.readFileSync('ssl/server.crt'),
    requestCert: true
  };
  this.requestListener = (new ApiBuilder()).getListener();

  this.start = function() {
    https.createServer(this.options, this.requestListener).listen(this.port);
  };
};

exports.Server = Server;
