(function() {
  var REGEX, isOriya;

  REGEX = /^[\u0951\u0952\u0964\u0965\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77]+$/;

  isOriya = function(value) {
    return REGEX.test(value);
  };

  module.exports = isOriya;

}).call(this);
