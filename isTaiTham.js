'use strict';

(() => {
  const REGEX = /^[\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD]+$/;

  const isTaiTham = (value) => {
    return REGEX.test(value);
  }; // end isTaiTham

  // export isTaiTham as commonjs module
  module.exports = isTaiTham;
})(); // end IIFE