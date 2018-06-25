(function() {
  var REGEX, isBatak;

  REGEX = /^[\u1BC0-\u1BF3\u1BFC-\u1BFF]+$/;

  isBatak = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBatak;

}).call(this);
