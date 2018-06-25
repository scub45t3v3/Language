(function() {
  var REGEX, isElbasan;

  REGEX = /^(?:\uD801[\uDD00-\uDD27])+$/;

  isElbasan = function(value) {
    return REGEX.test(value);
  };

  module.exports = isElbasan;

}).call(this);
