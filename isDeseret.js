'use strict';

(() => {
  const REGEX = /^(?:\uD801[\uDC00-\uDC4F])+$/;

  const isDeseret = (value) => {
    return REGEX.test(value);
  }; // end isDeseret

  // export isDeseret as commonjs module
  module.exports = isDeseret;
})(); // end IIFE