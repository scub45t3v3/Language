'use strict';

(() => {
  const REGEX = /^[\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F]+$/;

  const isCham = (value) => {
    return REGEX.test(value);
  }; // end isCham

  // export isCham as commonjs module
  module.exports = isCham;
})(); // end IIFE