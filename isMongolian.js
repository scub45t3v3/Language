(function() {
  var REGEX, isMongolian;

  REGEX = /^(?:[\u1800-\u180E\u1810-\u1819\u1820-\u1877\u1880-\u18AA]|\uD805[\uDE60-\uDE6C])+$/;

  isMongolian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMongolian;

}).call(this);
