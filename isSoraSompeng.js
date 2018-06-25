(function() {
  var REGEX, isSoraSompeng;

  REGEX = /^(?:\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9])+$/;

  isSoraSompeng = function(value) {
    return REGEX.test(value);
  };

  module.exports = isSoraSompeng;

}).call(this);
