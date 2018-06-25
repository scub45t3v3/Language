(function() {
  var REGEX, isOgham;

  REGEX = /^[\u1680-\u169C]+$/;

  isOgham = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOgham;

}).call(this);
