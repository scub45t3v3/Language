(function() {
  var REGEX, isHangul;

  REGEX = /^[\u1100-\u11FF\u3001-\u3003\u3008-\u3011\u3013-\u301F\u302E-\u3030\u3037\u30FB\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFE45\uFE46\uFF61-\uFF65\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+$/;

  isHangul = function(value) {
    return REGEX.test(value);
  };

  module.exports = isHangul;

}).call(this);
