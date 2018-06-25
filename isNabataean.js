(function() {
  var REGEX, isNabataean;

  REGEX = /^(?:\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF])+$/;

  isNabataean = function(value) {
    return REGEX.test(value);
  };

  module.exports = isNabataean;

}).call(this);
