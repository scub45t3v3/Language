'use strict';

(() => {
  const REGEX = /^(?:\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E])+$/;

  const isEgyptianHieroglyphs = (value) => {
    return REGEX.test(value);
  }; // end isEgyptianHieroglyphs

  // export isEgyptianHieroglyphs as commonjs module
  module.exports = isEgyptianHieroglyphs;
})(); // end IIFE