(function() {
  var REGEX, isCyrillic;

  REGEX = /^[\u0400-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\u2E43\uA640-\uA69F\uFE2E\uFE2F]+$/;

  isCyrillic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCyrillic;

}).call(this);
