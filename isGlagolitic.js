'use strict';

(() => {
  const REGEX = /^(?:[\u0484\u0487\u2C00-\u2C2E\u2C30-\u2C5E\u2E43\uA66F]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A])+$/;

  const isGlagolitic = (value) => {
    return REGEX.test(value);
  }; // end isGlagolitic

  // export isGlagolitic as commonjs module
  module.exports = isGlagolitic;
})(); // end IIFE