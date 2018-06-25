(function() {
  var REGEX, isRunic;

  REGEX = /^[\u16A0-\u16EA\u16EE-\u16F8]+$/;

  isRunic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isRunic;

}).call(this);
