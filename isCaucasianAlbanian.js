(function() {
  var REGEX, isCaucasianAlbanian;

  REGEX = /^(?:\uD801[\uDD30-\uDD63\uDD6F])+$/;

  isCaucasianAlbanian = function(value) {
    return REGEX.test(value);
  };

  module.exports = isCaucasianAlbanian;

}).call(this);
