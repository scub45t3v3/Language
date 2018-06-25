(function() {
  var REGEX, isCuneiform;

  REGEX = /^(?:\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43])+$/;

  isCuneiform = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCuneiform;

}).call(this);
