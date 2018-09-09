'use strict';

(() => {
  const REGEX = /^[\u0531-\u0556\u0559-\u055F\u0561-\u0587\u0589\u058A\u058D-\u058F\uFB13-\uFB17]+$/;

  const isArmenian = (value) => {
    return REGEX.test(value);
  }; // end isArmenian

  // export isArmenian as commonjs module
  module.exports = isArmenian;
})(); // end IIFE