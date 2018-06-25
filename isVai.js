(function() {
  var REGEX, isVai;

  REGEX = /^[\uA500-\uA62B]+$/;

  isVai = function(value) {
    return REGEX.test(value);
  };

  module.exports = isVai;

}).call(this);
