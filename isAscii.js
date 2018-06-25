(function() {
  var REGEX, isAscii;

  REGEX = /^[\x00-\x7F]+$/;

  isAscii = function(value) {
    return REGEX.test(value);
  };

  module.exports = isAscii;

}).call(this);
