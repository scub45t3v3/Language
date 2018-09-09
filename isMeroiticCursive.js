'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF])+$/;

  const isMeroiticCursive = (value) => {
    return REGEX.test(value);
  }; // end isMeroiticCursive

  // export isMeroiticCursive as commonjs module
  module.exports = isMeroiticCursive;
})(); // end IIFE