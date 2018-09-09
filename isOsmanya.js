'use strict';

(() => {
  const REGEX = /^(?:\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9])+$/;

  const isOsmanya = (value) => {
    return REGEX.test(value);
  }; // end isOsmanya

  // export isOsmanya as commonjs module
  module.exports = isOsmanya;
})(); // end IIFE