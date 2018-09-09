'use strict';

(() => {
  const REGEX = /^(?:[\u3001-\u3003\u3008-\u3011\u3013-\u301F\u3030-\u3035\u3037\u303C\u303D\u3041-\u3096\u3099-\u30A0\u30FB\u30FC\uFE45\uFE46\uFF61-\uFF65\uFF70\uFF9E\uFF9F]|\uD82C\uDC01|\uD83C\uDE00)+$/;

  const isHiragana = (value) => {
    return REGEX.test(value);
  }; // end isHiragana

  // export isHiragana as commonjs module
  module.exports = isHiragana;
})(); // end IIFE