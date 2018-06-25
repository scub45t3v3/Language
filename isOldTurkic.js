(function() {
  var REGEX, isOldTurkic;

  REGEX = /^(?:\uD803[\uDC00-\uDC48])+$/;

  isOldTurkic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOldTurkic;

}).call(this);
