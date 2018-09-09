'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDD20-\uDD39\uDD3F])+$/;

  const isLydian = (value) => {
    return REGEX.test(value);
  }; // end isLydian

  // export isLydian as commonjs module
  module.exports = isLydian;
})(); // end IIFE