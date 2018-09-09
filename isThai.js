'use strict';

(() => {
  const REGEX = /^[\u0E01-\u0E3A\u0E40-\u0E5B]+$/;

  const isThai = (value) => {
    return REGEX.test(value);
  }; // end isThai

  // export isThai as commonjs module
  module.exports = isThai;
})(); // end IIFE