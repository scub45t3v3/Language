(function() {
  var REGEX, isOldPersian;

  REGEX = /^(?:\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5])+$/;

  isOldPersian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOldPersian;

}).call(this);
