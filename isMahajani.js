'use strict';

(() => {
  const REGEX = /^(?:[\u0964-\u096F\uA830-\uA839]|\uD804[\uDD50-\uDD76])+$/;

  const isMahajani = (value) => {
    return REGEX.test(value);
  }; // end isMahajani

  // export isMahajani as commonjs module
  module.exports = isMahajani;
})(); // end IIFE