(function() {
  var REGEX, isKannada;

  REGEX = /^[\u0951\u0952\u0964\u0965\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u1CDA\u1CF5\uA830-\uA835]+$/;

  isKannada = function(value) {
    return REGEX.test(value);
  };

  module.exports = isKannada;

}).call(this);
