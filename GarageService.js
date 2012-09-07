var express = require('express');
var WiflyAdapter = require('./WiflyAdapter').WiflyAdapter;

function GarageService() {
  this.getStatus = function() {
    return 'Unknown';
  };

  this.activate = function() {
    return 'Click!';
  };

  this.getHistory = function() {
    return 'None';
  };

  this.getTemperature = function () {
    return 'Unknown';
  };
};

exports.GarageService = GarageService;
