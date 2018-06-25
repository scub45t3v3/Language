(function() {
  var REGEX, isGeorgian;

  REGEX = /^[\u0589\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FF\u2D00-\u2D25\u2D27\u2D2D]+$/;

  isGeorgian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isGeorgian;

}).call(this);
