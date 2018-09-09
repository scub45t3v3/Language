'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF])+$/;

  const isHatran = (value) => {
    return REGEX.test(value);
  }; // end isHatran

  // export isHatran as commonjs module
  module.exports = isHatran;
})(); // end IIFE