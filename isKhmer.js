(function() {
  var REGEX, isKhmer;

  REGEX = /^[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]+$/;

  isKhmer = function(value) {
    return REGEX.test(value);
  };

  module.exports = isKhmer;

}).call(this);
