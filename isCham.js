(function() {
  var REGEX, isCham;

  REGEX = /^[\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F]+$/;

  isCham = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCham;

}).call(this);
