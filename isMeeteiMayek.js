'use strict';

(() => {
  const REGEX = /^[\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9]+$/;

  const isMeeteiMayek = (value) => {
    return REGEX.test(value);
  }; // end isMeeteiMayek

  // export isMeeteiMayek as commonjs module
  module.exports = isMeeteiMayek;
})(); // end IIFE