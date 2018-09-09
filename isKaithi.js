'use strict';

(() => {
  const REGEX = /^(?:[\u0966-\u096F\uA830-\uA839]|\uD804[\uDC80-\uDCC1])+$/;

  const isKaithi = (value) => {
    return REGEX.test(value);
  }; // end isKaithi

  // export isKaithi as commonjs module
  module.exports = isKaithi;
})(); // end IIFE