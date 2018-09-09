'use strict';

(() => {
  const REGEX = /^(?:\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C])+$/;

  const isBhaiksuki = (value) => {
    return REGEX.test(value);
  }; // end isBhaiksuki

  // export isBhaiksuki as commonjs module
  module.exports = isBhaiksuki;
})(); // end IIFE