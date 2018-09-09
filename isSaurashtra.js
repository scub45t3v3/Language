'use strict';

(() => {
  const REGEX = /^[\uA880-\uA8C5\uA8CE-\uA8D9]+$/;

  const isSaurashtra = (value) => {
    return REGEX.test(value);
  }; // end isSaurashtra

  // export isSaurashtra as commonjs module
  module.exports = isSaurashtra;
})(); // end IIFE