(function() {
  var REGEX, isAnatolianHieroglyphs;

  REGEX = /^(?:\uD811[\uDC00-\uDE46])+$/;

  isAnatolianHieroglyphs = function(value) {
    return REGEX.test(value);
  };

  module.exports = isAnatolianHieroglyphs;

}).call(this);
