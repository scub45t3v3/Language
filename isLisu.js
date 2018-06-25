(function() {
  var REGEX, isLisu;

  REGEX = /^[\uA4D0-\uA4FF]+$/;

  isLisu = function(value) {
    return REGEX.test(value);
  };

  module.exports = isLisu;

}).call(this);
