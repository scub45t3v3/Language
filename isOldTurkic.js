'use strict';

(() => {
  const REGEX = /^(?:\uD803[\uDC00-\uDC48])+$/;

  const isOldTurkic = (value) => {
    return REGEX.test(value);
  }; // end isOldTurkic

  // export isOldTurkic as commonjs module
  module.exports = isOldTurkic;
})(); // end IIFE