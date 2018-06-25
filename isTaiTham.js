(function() {
  var REGEX, isTaiTham;

  REGEX = /^[\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD]+$/;

  isTaiTham = function(value) {
    return REGEX.test(value);
  };

  module.exports = isTaiTham;

}).call(this);
