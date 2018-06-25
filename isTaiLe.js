(function() {
  var REGEX, isTaiLe;

  REGEX = /^[\u1040-\u1049\u1950-\u196D\u1970-\u1974]+$/;

  isTaiLe = function(value) {
    return REGEX.test(value);
  };

  module.exports = isTaiLe;

}).call(this);
