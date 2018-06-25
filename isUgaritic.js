(function() {
  var REGEX, isUgaritic;

  REGEX = /^(?:\uD800[\uDF80-\uDF9D\uDF9F])+$/;

  isUgaritic = function(value) {
    return REGEX.test(value);
  };

  module.exports = isUgaritic;

}).call(this);
