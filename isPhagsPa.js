(function() {
  var REGEX, isPhagsPa;

  REGEX = /^[\u1802\u1803\u1805\uA840-\uA877]+$/;

  isPhagsPa = function(value) {
    return REGEX.test(value);
  };

  module.exports = isPhagsPa;

}).call(this);
