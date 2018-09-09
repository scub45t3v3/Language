'use strict';

(() => {
  const REGEX = /^[\uAA80-\uAAC2\uAADB-\uAADF]+$/;

  const isTaiViet = (value) => {
    return REGEX.test(value);
  }; // end isTaiViet

  // export isTaiViet as commonjs module
  module.exports = isTaiViet;
})(); // end IIFE