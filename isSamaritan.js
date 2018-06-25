(function() {
  var REGEX, isSamaritan;

  REGEX = /^[\u0800-\u082D\u0830-\u083E]+$/;

  isSamaritan = function(value) {
    return REGEX.test(value);
  };

  module.exports = isSamaritan;

}).call(this);
