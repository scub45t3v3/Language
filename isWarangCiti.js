'use strict';

(() => {
  const REGEX = /^(?:\uD806[\uDCA0-\uDCF2\uDCFF])+$/;

  const isWarangCiti = (value) => {
    return REGEX.test(value);
  }; // end isWarangCiti

  // export isWarangCiti as commonjs module
  module.exports = isWarangCiti;
})(); // end IIFE