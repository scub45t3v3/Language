'use strict';

(() => {
  const REGEX = /^[\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F]+$/;

  const isLepcha = (value) => {
    return REGEX.test(value);
  }; // end isLepcha

  // export isLepcha as commonjs module
  module.exports = isLepcha;
})(); // end IIFE