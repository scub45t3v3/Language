(function() {
  var REGEX, isMandaic;

  REGEX = /^[\u0640\u0840-\u085B\u085E]+$/;

  isMandaic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMandaic;

}).call(this);
