'use strict';

(() => {
  const REGEX = /^[\u1735\u1736\u1760-\u176C\u176E-\u1770\u1772\u1773]+$/;

  const isTagbanwa = (value) => {
    return REGEX.test(value);
  }; // end isTagbanwa

  // export isTagbanwa as commonjs module
  module.exports = isTagbanwa;
})(); // end IIFE