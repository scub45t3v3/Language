(function() {
  var REGEX, isCarian;

  REGEX = /^(?:\uD800[\uDEA0-\uDED0])+$/;

  isCarian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCarian;

}).call(this);
