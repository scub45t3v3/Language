(function() {
  var REGEX, isModi;

  REGEX = /^(?:[\uA830-\uA839]|\uD805[\uDE00-\uDE44\uDE50-\uDE59])+$/;

  isModi = function(value) {
    return REGEX.test(value);
  };

  module.exports = isModi;

}).call(this);
