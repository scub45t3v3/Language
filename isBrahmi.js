'use strict';

(() => {
  const REGEX = /^(?:\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F])+$/;

  const isBrahmi = (value) => {
    return REGEX.test(value);
  }; // end isBrahmi

  // export isBrahmi as commonjs module
  module.exports = isBrahmi;
})(); // end IIFE