(function() {
  var REGEX, isKayahLi;

  REGEX = /^[\uA900-\uA92F]+$/;

  isKayahLi = function(value) {
    return REGEX.test(value);
  };

  module.exports = isKayahLi;

}).call(this);
