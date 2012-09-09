/**
 * Module dependencies.
 */
var fs = require('fs')
  , https = require('https')
  , express = require('express')
  , buildGarageApp = require('./garage_app')
  , GarageService = require('./garage_service')
  , Authenticator = require('./authenticator');

/**
 * Expose `Server`.
 */
module.exports = Server;

/**
 * Initialize a new `Server`.
 */
function Server() {
  this.port = 9000;
  this.options = {
    key:         fs.readFileSync('../ssl/server.key'),
    cert:        fs.readFileSync('../ssl/server.crt'),
    requestCert: true
  };
  this.requestListener = buildGarageApp(new Authenticator(), new GarageService());

  this.start = function() {
    https.createServer(this.options, this.requestListener).listen(this.port);
  };
};
