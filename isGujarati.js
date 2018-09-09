'use strict';

(() => {
  const REGEX = /^[\u0951\u0952\u0964\u0965\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9\uA830-\uA839]+$/;

  const isGujarati = (value) => {
    return REGEX.test(value);
  }; // end isGujarati

  // export isGujarati as commonjs module
  module.exports = isGujarati;
})(); // end IIFE