(function() {
  var REGEX, isOldSouthArabian;

  REGEX = /^(?:\uD802[\uDE60-\uDE7F])+$/;

  isOldSouthArabian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOldSouthArabian;

}).call(this);
