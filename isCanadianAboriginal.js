(function() {
  var REGEX, isCanadianAboriginal;

  REGEX = /^[\u1400-\u167F\u18B0-\u18F5]+$/;

  isCanadianAboriginal = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCanadianAboriginal;

}).call(this);
