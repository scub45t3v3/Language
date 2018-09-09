'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF])+$/;

  const isNabataean = (value) => {
    return REGEX.test(value);
  }; // end isNabataean

  // export isNabataean as commonjs module
  module.exports = isNabataean;
})(); // end IIFE