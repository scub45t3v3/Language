(function() {
  var REGEX, isPahawhHmong;

  REGEX = /^(?:\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F])+$/;

  isPahawhHmong = function(value) {
    return REGEX.test(value);
  };

  module.exports = isPahawhHmong;

}).call(this);
