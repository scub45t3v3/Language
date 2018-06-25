(function() {
  var REGEX, isBalinese;

  REGEX = /^[\u1B00-\u1B4B\u1B50-\u1B7C]+$/;

  isBalinese = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBalinese;

}).call(this);
