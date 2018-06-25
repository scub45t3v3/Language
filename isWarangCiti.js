(function() {
  var REGEX, isWarangCiti;

  REGEX = /^(?:\uD806[\uDCA0-\uDCF2\uDCFF])+$/;

  isWarangCiti = function(value) {
    return REGEX.test(value);
  };

  module.exports = isWarangCiti;

}).call(this);
