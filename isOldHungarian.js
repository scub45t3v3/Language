'use strict';

(() => {
  const REGEX = /^(?:\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF])+$/;

  const isOldHungarian = (value) => {
    return REGEX.test(value);
  }; // end isOldHungarian

  // export isOldHungarian as commonjs module
  module.exports = isOldHungarian;
})(); // end IIFE