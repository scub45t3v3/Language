'use strict';

(() => {
  const REGEX = /^[\u0900-\u097F\u1CD0-\u1CF6\u1CF8\u1CF9\u20F0\uA830-\uA839\uA8E0-\uA8FD]+$/;

  const isDevanagari = (value) => {
    return REGEX.test(value);
  }; // end isDevanagari

  // export isDevanagari as commonjs module
  module.exports = isDevanagari;
})(); // end IIFE