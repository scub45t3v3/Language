(function() {
  var REGEX, isMahajani;

  REGEX = /^(?:[\u0964-\u096F\uA830-\uA839]|\uD804[\uDD50-\uDD76])+$/;

  isMahajani = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMahajani;

}).call(this);
