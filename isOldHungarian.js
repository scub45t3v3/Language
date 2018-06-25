(function() {
  var REGEX, isOldHungarian;

  REGEX = /^(?:\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF])+$/;

  isOldHungarian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOldHungarian;

}).call(this);
