(function() {
  var REGEX, isMendeKikakui;

  REGEX = /^(?:\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6])+$/;

  isMendeKikakui = function(value) {
    return REGEX.test(value);
  };

  module.exports = isMendeKikakui;

}).call(this);
