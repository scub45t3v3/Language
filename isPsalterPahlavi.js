'use strict';

(() => {
  const REGEX = /^(?:\u0640|\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF])+$/;

  const isPsalterPahlavi = (value) => {
    return REGEX.test(value);
  }; // end isPsalterPahlavi

  // export isPsalterPahlavi as commonjs module
  module.exports = isPsalterPahlavi;
})(); // end IIFE