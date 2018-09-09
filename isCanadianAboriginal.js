'use strict';

(() => {
  const REGEX = /^[\u1400-\u167F\u18B0-\u18F5]+$/;

  const isCanadianAboriginal = (value) => {
    return REGEX.test(value);
  }; // end isCanadianAboriginal

  // export isCanadianAboriginal as commonjs module
  module.exports = isCanadianAboriginal;
})(); // end IIFE