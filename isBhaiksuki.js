(function() {
  var REGEX, isBhaiksuki;

  REGEX = /^(?:\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C])+$/;

  isBhaiksuki = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBhaiksuki;

}).call(this);
