'use strict';

(() => {
  const REGEX = /^[\u3001\u3002\u3008-\u3011\u3014-\u301B\u30FB\uA000-\uA48C\uA490-\uA4C6\uFF61-\uFF65]+$/;

  const isYi = (value) => {
    return REGEX.test(value);
  }; // end isYi

  // export isYi as commonjs module
  module.exports = isYi;
})(); // end IIFE