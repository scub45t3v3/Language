(function() {
  var REGEX, isShavian;

  REGEX = /^(?:\uD801[\uDC50-\uDC7F])+$/;

  isShavian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isShavian;

}).call(this);
