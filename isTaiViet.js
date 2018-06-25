(function() {
  var REGEX, isTaiViet;

  REGEX = /^[\uAA80-\uAAC2\uAADB-\uAADF]+$/;

  isTaiViet = function(value) {
    return REGEX.test(value);
  };

  module.exports = isTaiViet;

}).call(this);
