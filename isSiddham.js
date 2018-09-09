'use strict';

(() => {
  const REGEX = /^(?:\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD])+$/;

  const isSiddham = (value) => {
    return REGEX.test(value);
  }; // end isSiddham

  // export isSiddham as commonjs module
  module.exports = isSiddham;
})(); // end IIFE