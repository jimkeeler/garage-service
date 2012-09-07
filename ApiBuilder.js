var express = require('express');
var Authorizer = require('./Authorizer').Authorizer;
var GarageService = require('./GarageService').GarageService;

function ApiBuilder() {
  this.app = express();
  this.auth = express.basicAuth((new Authorizer()).authorize);
  svc = new GarageService();

  this.app.get('/status', this.auth, function(req, res) {
    res.send(svc.getStatus());
  });

  this.app.get('/activate', this.auth, function(req, res) {
    res.send(svc.activate());
  });

  this.app.get('/history', this.auth, function(req, res) {
    res.send(svc.getHistory());
  });

  this.app.get('/temperature', this.auth, function(req, res) {
    res.send(svc.getTemperature());
  });

  this.getListener = function() {
    return this.app;
  }
};

exports.ApiBuilder = ApiBuilder;
