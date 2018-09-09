'use strict';

(() => {
  const REGEX = /^(?:\uD805[\uDC00-\uDC59\uDC5B\uDC5D])+$/;

  const isNewa = (value) => {
    return REGEX.test(value);
  }; // end isNewa

  // export isNewa as commonjs module
  module.exports = isNewa;
})(); // end IIFE