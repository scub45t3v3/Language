'use strict';

(() => {
  const REGEX = /^[\u0640\u0840-\u085B\u085E]+$/;

  const isMandaic = (value) => {
    return REGEX.test(value);
  }; // end isMandaic

  // export isMandaic as commonjs module
  module.exports = isMandaic;
})(); // end IIFE