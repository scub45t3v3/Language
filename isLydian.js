(function() {
  var REGEX, isLydian;

  REGEX = /^(?:\uD802[\uDD20-\uDD39\uDD3F])+$/;

  isLydian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isLydian;

}).call(this);
