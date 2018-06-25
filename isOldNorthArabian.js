(function() {
  var REGEX, isOldNorthArabian;

  REGEX = /^(?:\uD802[\uDE80-\uDE9F])+$/;

  isOldNorthArabian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOldNorthArabian;

}).call(this);
