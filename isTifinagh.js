(function() {
  var REGEX, isTifinagh;

  REGEX = /^[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]+$/;

  isTifinagh = function(value) {
    return REGEX.test(value);
  };

  module.exports = isTifinagh;

}).call(this);
