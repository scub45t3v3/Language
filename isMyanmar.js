(function() {
  var REGEX, isMyanmar;

  REGEX = /^[\u1000-\u109F\uA92E\uA9E0-\uA9FE\uAA60-\uAA7F]+$/;

  isMyanmar = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMyanmar;

}).call(this);
