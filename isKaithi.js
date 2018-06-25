(function() {
  var REGEX, isKaithi;

  REGEX = /^(?:[\u0966-\u096F\uA830-\uA839]|\uD804[\uDC80-\uDCC1])+$/;

  isKaithi = function(value) {
    return REGEX.test(value);
  };

  module.exports = isKaithi;

}).call(this);
