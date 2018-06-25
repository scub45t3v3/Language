(function() {
  var REGEX, isCoptic;

  REGEX = /^(?:[\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF]|\uD800[\uDEE0-\uDEFB])+$/;

  isCoptic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCoptic;

}).call(this);
