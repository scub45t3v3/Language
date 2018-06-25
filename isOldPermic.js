(function() {
  var REGEX, isOldPermic;

  REGEX = /^(?:\u0483|\uD800[\uDF50-\uDF7A])+$/;

  isOldPermic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOldPermic;

}).call(this);
