(function() {
  var REGEX, isPauCinHau;

  REGEX = /^(?:\uD806[\uDEC0-\uDEF8])+$/;

  isPauCinHau = function(value) {
    return REGEX.test(value);
  };

  module.exports = isPauCinHau;

}).call(this);
