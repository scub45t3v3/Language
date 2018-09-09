'use strict';

(() => {
  const REGEX = /^(?:\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43])+$/;

  const isCuneiform = (value) => {
    return REGEX.test(value);
  }; // end isCuneiform

  // export isCuneiform as commonjs module
  module.exports = isCuneiform;
})(); // end IIFE