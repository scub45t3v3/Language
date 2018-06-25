(function() {
  var REGEX, isLycian;

  REGEX = /^(?:\uD800[\uDE80-\uDE9C])+$/;

  isLycian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isLycian;

}).call(this);
