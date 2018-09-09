'use strict';

(() => {
  const REGEX = /^[\u1000-\u109F\uA92E\uA9E0-\uA9FE\uAA60-\uAA7F]+$/;

  const isMyanmar = (value) => {
    return REGEX.test(value);
  }; // end isMyanmar

  // export isMyanmar as commonjs module
  module.exports = isMyanmar;
})(); // end IIFE