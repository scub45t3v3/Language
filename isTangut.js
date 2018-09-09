'use strict';

(() => {
  const REGEX = /^(?:\uD81B\uDFE0|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2])+$/;

  const isTangut = (value) => {
    return REGEX.test(value);
  }; // end isTangut

  // export isTangut as commonjs module
  module.exports = isTangut;
})(); // end IIFE