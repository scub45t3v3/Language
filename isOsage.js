(function() {
  var REGEX, isOsage;

  REGEX = /^(?:\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB])+$/;

  isOsage = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOsage;

}).call(this);
