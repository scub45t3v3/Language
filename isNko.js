(function() {
  var REGEX, isNko;

  REGEX = /^[\u07C0-\u07FA]+$/;

  isNko = function(value) {
    return REGEX.test(value);
  };

  module.exports = isNko;

}).call(this);
