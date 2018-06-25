(function() {
  var REGEX, isManichaean;

  REGEX = /^(?:\u0640|\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6])+$/;

  isManichaean = function(value) {
    return REGEX.test(value);
  };

  module.exports = isManichaean;

}).call(this);
