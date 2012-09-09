var express = require('express');

module.exports = buildGarageApp;

function buildGarageApp(authenticator, service) {
	var app = express();
	var svc = service;
	
	app.get('/status', function(req, res) {
	  res.send(service.getStatus());
	});

	app.get('/activate', function(req, res) {
      res.send(service.activate());
	});
	
	app.get('/history', function(req, res) {
	  res.send(service.getHistory());
	});

    app.get('/temperature', function(req, res) {
	  res.send(service.getTemperature());
	});
	
	return app;
};
