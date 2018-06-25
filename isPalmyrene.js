(function() {
  var REGEX, isPalmyrene;

  REGEX = /^(?:\uD802[\uDC60-\uDC7F])+$/;

  isPalmyrene = function(value) {
    return REGEX.test(value);
  };

  module.exports = isPalmyrene;

}).call(this);
