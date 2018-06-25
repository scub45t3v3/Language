(function() {
  var REGEX, isMeroiticCursive;

  REGEX = /^(?:\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF])+$/;

  isMeroiticCursive = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMeroiticCursive;

}).call(this);
