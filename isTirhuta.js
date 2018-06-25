(function() {
  var REGEX, isTirhuta;

  REGEX = /^(?:[\u0964\u0965\uA830-\uA839]|\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9])+$/;

  isTirhuta = function(value) {
    return REGEX.test(value);
  };

  module.exports = isTirhuta;

}).call(this);
