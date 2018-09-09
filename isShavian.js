'use strict';

(() => {
  const REGEX = /^(?:\uD801[\uDC50-\uDC7F])+$/;

  const isShavian = (value) => {
    return REGEX.test(value);
  }; // end isShavian

  // export isShavian as commonjs module
  module.exports = isShavian;
})(); // end IIFE