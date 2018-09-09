'use strict';

(() => {
  const REGEX = /^[\u0591-\u05C7\u05D0-\u05EA\u05F0-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F]+$/;

  const isHebrew = (value) => {
    return REGEX.test(value);
  }; // end isHebrew

  // export isHebrew as commonjs module
  module.exports = isHebrew;
})(); // end IIFE