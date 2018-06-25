(function() {
  var REGEX, isGothic;

  REGEX = /^(?:\uD800[\uDF30-\uDF4A])+$/;

  isGothic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isGothic;

}).call(this);
