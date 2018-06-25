(function() {
  var REGEX, isMeeteiMayek;

  REGEX = /^[\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9]+$/;

  isMeeteiMayek = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMeeteiMayek;

}).call(this);
