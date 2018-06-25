(function() {
  var REGEX, isTibetan;

  REGEX = /^[\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA]+$/;

  isTibetan = function(value) {
    return REGEX.test(value);
  };

  module.exports = isTibetan;

}).call(this);
