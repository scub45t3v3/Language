'use strict';

(() => {
  const REGEX = /^[\u2800-\u28FF]+$/;

  const isBraille = (value) => {
    return REGEX.test(value);
  }; // end isBraille

  // export isBraille as commonjs module
  module.exports = isBraille;
})(); // end IIFE