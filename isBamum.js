(function() {
  var REGEX, isBamum;

  REGEX = /^(?:[\uA6A0-\uA6F7]|\uD81A[\uDC00-\uDE38])+$/;

  isBamum = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBamum;

}).call(this);
