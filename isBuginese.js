(function() {
  var REGEX, isBuginese;

  REGEX = /^[\u1A00-\u1A1B\u1A1E\u1A1F\uA9CF]+$/;

  isBuginese = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBuginese;

}).call(this);
