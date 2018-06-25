(function() {
  var REGEX, isEgyptianHieroglyphs;

  REGEX = /^(?:\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E])+$/;

  isEgyptianHieroglyphs = function(value) {
    return REGEX.test(value);
  };

  module.exports = isEgyptianHieroglyphs;

}).call(this);
