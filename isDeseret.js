(function() {
  var REGEX, isDeseret;

  REGEX = /^(?:\uD801[\uDC00-\uDC4F])+$/;

  isDeseret = function(value) {
    return REGEX.test(value);
  };

  module.exports = isDeseret;

}).call(this);
