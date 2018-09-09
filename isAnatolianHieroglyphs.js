'use strict';

(() => {
  const REGEX = /^(?:\uD811[\uDC00-\uDE46])+$/;

  const isAnatolianHieroglyphs = (value) => {
    return REGEX.test(value);
  }; // end isAnatolianHieroglyphs

  // export isAnatolianHieroglyphs as commonjs module
  module.exports = isAnatolianHieroglyphs;
})(); // end IIFE