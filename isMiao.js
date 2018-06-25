(function() {
  var REGEX, isMiao;

  REGEX = /^(?:\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F])+$/;

  isMiao = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMiao;

}).call(this);
