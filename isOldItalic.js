(function() {
  var REGEX, isOldItalic;

  REGEX = /^(?:\uD800[\uDF00-\uDF23])+$/;

  isOldItalic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOldItalic;

}).call(this);
