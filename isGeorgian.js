'use strict';

(() => {
  const REGEX = /^[\u0589\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FF\u2D00-\u2D25\u2D27\u2D2D]+$/;

  const isGeorgian = (value) => {
    return REGEX.test(value);
  }; // end isGeorgian

  // export isGeorgian as commonjs module
  module.exports = isGeorgian;
})(); // end IIFE