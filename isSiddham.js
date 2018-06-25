(function() {
  var REGEX, isSiddham;

  REGEX = /^(?:\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD])+$/;

  isSiddham = function(value) {
    return REGEX.test(value);
  };

  module.exports = isSiddham;

}).call(this);
