'use strict';

(() => {
  const REGEX = /^(?:[\u3001-\u3003\u3008-\u3011\u3013-\u301F\u3030-\u3035\u3037\u303C\u303D\u3099-\u309C\u30A0-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFE45\uFE46\uFF61-\uFF9F]|\uD82C\uDC00)+$/;

  const isKatakana = (value) => {
    return REGEX.test(value);
  }; // end isKatakana

  // export isKatakana as commonjs module
  module.exports = isKatakana;
})(); // end IIFE