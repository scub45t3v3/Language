(function() {
  var REGEX, isSinhala;

  REGEX = /^(?:[\u0964\u0965\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4]|\uD804[\uDDE1-\uDDF4])+$/;

  isSinhala = function(value) {
    return REGEX.test(value);
  };

  module.exports = isSinhala;

}).call(this);
