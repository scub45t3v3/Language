'use strict';

(() => {
  const REGEX = /^[\u1680-\u169C]+$/;

  const isOgham = (value) => {
    return REGEX.test(value);
  }; // end isOgham

  // export isOgham as commonjs module
  module.exports = isOgham;
})(); // end IIFE