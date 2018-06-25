(function() {
  var REGEX, isMro;

  REGEX = /^(?:\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F])+$/;

  isMro = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMro;

}).call(this);
