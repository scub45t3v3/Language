'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDD80-\uDD9F])+$/;

  const isMeroiticHieroglyphs = (value) => {
    return REGEX.test(value);
  }; // end isMeroiticHieroglyphs

  // export isMeroiticHieroglyphs as commonjs module
  module.exports = isMeroiticHieroglyphs;
})(); // end IIFE