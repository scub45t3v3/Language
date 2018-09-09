'use strict';

(() => {
  const REGEX = /^[\u1BC0-\u1BF3\u1BFC-\u1BFF]+$/;

  const isBatak = (value) => {
    return REGEX.test(value);
  }; // end isBatak

  // export isBatak as commonjs module
  module.exports = isBatak;
})(); // end IIFE