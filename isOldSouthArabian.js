'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDE60-\uDE7F])+$/;

  const isOldSouthArabian = (value) => {
    return REGEX.test(value);
  }; // end isOldSouthArabian

  // export isOldSouthArabian as commonjs module
  module.exports = isOldSouthArabian;
})(); // end IIFE