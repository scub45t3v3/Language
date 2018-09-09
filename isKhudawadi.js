'use strict';

(() => {
  const REGEX = /^(?:[\u0964\u0965\uA830-\uA839]|\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9])+$/;

  const isKhudawadi = (value) => {
    return REGEX.test(value);
  }; // end isKhudawadi

  // export isKhudawadi as commonjs module
  module.exports = isKhudawadi;
})(); // end IIFE