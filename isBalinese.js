'use strict';

(() => {
  const REGEX = /^[\u1B00-\u1B4B\u1B50-\u1B7C]+$/;

  const isBalinese = (value) => {
    return REGEX.test(value);
  }; // end isBalinese

  // export isBalinese as commonjs module
  module.exports = isBalinese;
})(); // end IIFE