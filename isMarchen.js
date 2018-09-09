'use strict';

(() => {
  const REGEX = /^(?:\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6])+$/;

  const isMarchen = (value) => {
    return REGEX.test(value);
  }; // end isMarchen

  // export isMarchen as commonjs module
  module.exports = isMarchen;
})(); // end IIFE