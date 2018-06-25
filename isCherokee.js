(function() {
  var REGEX, isCherokee;

  REGEX = /^[\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF]+$/;

  isCherokee = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCherokee;

}).call(this);
