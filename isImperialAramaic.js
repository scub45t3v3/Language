(function() {
  var REGEX, isImperialAramaic;

  REGEX = /^(?:\uD802[\uDC40-\uDC55\uDC57-\uDC5F])+$/;

  isImperialAramaic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isImperialAramaic;

}).call(this);
