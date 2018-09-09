'use strict';

(() => {
  const REGEX = /^[\u1720-\u1736]+$/;

  const isHanunoo = (value) => {
    return REGEX.test(value);
  }; // end isHanunoo

  // export isHanunoo as commonjs module
  module.exports = isHanunoo;
})(); // end IIFE