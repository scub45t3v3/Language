(function() {
  var REGEX, isOlChiki;

  REGEX = /^(?:\uD802[\uDD20-\uDD39\uDD3F])+$/;

  isOlChiki = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOlChiki;

}).call(this);
