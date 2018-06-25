(function() {
  var REGEX, isBuhid;

  REGEX = /^[\u1735\u1736\u1740-\u1753]+$/;

  isBuhid = function(value) {
    return REGEX.test(value);
  };

  module.exports = isBuhid;

}).call(this);
