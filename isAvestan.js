(function() {
  var REGEX, isAvestan;

  REGEX = /^(?:\uD802[\uDF00-\uDF35\uDF39-\uDF3F])+$/;

  isAvestan = function(value) {
    return REGEX.test(value);
  };

  module.exports = isAvestan;

}).call(this);
