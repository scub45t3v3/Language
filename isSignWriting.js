'use strict';

(() => {
  const REGEX = /^(?:\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF])+$/;

  const isSignWriting = (value) => {
    return REGEX.test(value);
  }; // end isSignWriting

  // export isSignWriting as commonjs module
  module.exports = isSignWriting;
})(); // end IIFE