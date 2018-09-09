'use strict';

(() => {
  const REGEX = /^(?:\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5])+$/;

  const isOldPersian = (value) => {
    return REGEX.test(value);
  }; // end isOldPersian

  // export isOldPersian as commonjs module
  module.exports = isOldPersian;
})(); // end IIFE