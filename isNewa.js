(function() {
  var REGEX, isNewa;

  REGEX = /^(?:\uD805[\uDC00-\uDC59\uDC5B\uDC5D])+$/;

  isNewa = function(value) {
    return REGEX.test(value);
  };

  module.exports = isNewa;

}).call(this);
