(function() {
  var REGEX, isBassaVah;

  REGEX = /^(?:\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5])+$/;

  isBassaVah = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBassaVah;

}).call(this);
