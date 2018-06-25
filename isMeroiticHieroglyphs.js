(function() {
  var REGEX, isMeroiticHieroglyphs;

  REGEX = /^(?:\uD802[\uDD80-\uDD9F])+$/;

  isMeroiticHieroglyphs = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMeroiticHieroglyphs;

}).call(this);
