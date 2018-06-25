(function() {
  var REGEX, isRejang;

  REGEX = /^[\uA930-\uA953\uA95F]+$/;

  isRejang = function(value) {
    return REGEX.test(value);
  };

  module.exports = isRejang;

}).call(this);
