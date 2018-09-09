'use strict';

(() => {
  const REGEX = /^(?:[\u0AE6-\u0AEF]|\uD804[\uDE00-\uDE11\uDE13-\uDE3E])+$/;

  const isKhojki = (value) => {
    return REGEX.test(value);
  }; // end isKhojki

  // export isKhojki as commonjs module
  module.exports = isKhojki;
})(); // end IIFE