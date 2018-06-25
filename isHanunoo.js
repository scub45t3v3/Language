(function() {
  var REGEX, isHanunoo;

  REGEX = /^[\u1720-\u1736]+$/;

  isHanunoo = function(value) {
    return REGEX.test(value);
  };

  module.exports = isHanunoo;

}).call(this);
