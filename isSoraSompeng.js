'use strict';

(() => {
  const REGEX = /^(?:\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9])+$/;

  const isSoraSompeng = (value) => {
    return REGEX.test(value);
  }; // end isSoraSompeng

  // export isSoraSompeng as commonjs module
  module.exports = isSoraSompeng;
})(); // end IIFE