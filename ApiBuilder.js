var express = require('express');
var Authorizer = require('./Authorizer').Authorizer;
var WiflyAdapter = require('./WiflyAdapter').WiflyAdapter;


function ApiBuilder() {
  this.app = express();
  this.auth = express.basicAuth((new Authorizer()).authorize);

  this.app.get('/status', this.auth, function(req, res) {
    res.send((new WiflyAdapter()).getStatus());
  });

  this.getListener = function() {
    return this.app;
  }
};

exports.ApiBuilder = ApiBuilder;
