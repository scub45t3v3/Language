(function() {
  var REGEX, isPhoenician;

  REGEX = /^(?:\uD802[\uDD00-\uDD1B\uDD1F])+$/;

  isPhoenician = function(value) {
    return REGEX.test(value);
  };

  module.exports = isPhoenician;

}).call(this);
