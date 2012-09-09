/**
 * Expose 'GarageService'.
 */

module.exports = GarageService;

/**
 * Initialize a new `GarageService`.
 */

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
