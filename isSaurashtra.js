(function() {
  var REGEX, isSaurashtra;

  REGEX = /^[\uA880-\uA8C5\uA8CE-\uA8D9]+$/;

  isSaurashtra = function(value) {
    return REGEX.test(value);
  };

  module.exports = isSaurashtra;

}).call(this);
