(function() {
  var REGEX, isYi;

  REGEX = /^[\u3001\u3002\u3008-\u3011\u3014-\u301B\u30FB\uA000-\uA48C\uA490-\uA4C6\uFF61-\uFF65]+$/;

  isYi = function(value) {
    return REGEX.test(value);
  };

  module.exports = isYi;

}).call(this);
