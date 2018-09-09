'use strict';

(() => {
  const REGEX = /^[\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF]+$/;

  const isCherokee = (value) => {
    return REGEX.test(value);
  }; // end isCherokee

  // export isCherokee as commonjs module
  module.exports = isCherokee;
})(); // end IIFE