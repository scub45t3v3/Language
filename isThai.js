(function() {
  var REGEX, isThai;

  REGEX = /^[\u0E01-\u0E3A\u0E40-\u0E5B]+$/;

  isThai = function(value) {
    return REGEX.test(value);
  };

  module.exports = isThai;

}).call(this);
