(function() {
  var REGEX, isOsmanya;

  REGEX = /^(?:\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9])+$/;

  isOsmanya = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOsmanya;

}).call(this);
