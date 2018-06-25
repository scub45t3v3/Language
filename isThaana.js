(function() {
  var REGEX, isThaana;

  REGEX = /^[\u060C\u061B\u061F\u0660-\u0669\u0780-\u07B1\uFDF2\uFDFD]+$/;

  isThaana = function(value) {
    return REGEX.test(value);
  };

  module.exports = isThaana;

}).call(this);
