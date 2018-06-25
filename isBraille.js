(function() {
  var REGEX, isBraille;

  REGEX = /^[\u2800-\u28FF]+$/;

  isBraille = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBraille;

}).call(this);
