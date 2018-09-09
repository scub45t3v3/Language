'use strict';

(() => {
  const REGEX = /^[\uA930-\uA953\uA95F]+$/;

  const isRejang = (value) => {
    return REGEX.test(value);
  }; // end isRejang

  // export isRejang as commonjs module
  module.exports = isRejang;
})(); // end IIFE