'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDE80-\uDE9F])+$/;

  const isOldNorthArabian = (value) => {
    return REGEX.test(value);
  }; // end isOldNorthArabian

  // export isOldNorthArabian as commonjs module
  module.exports = isOldNorthArabian;
})(); // end IIFE