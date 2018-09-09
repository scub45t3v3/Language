'use strict';

(() => {
  const REGEX = /^[\u2D30-\u2D67\u2D6F\u2D70\u2D7F]+$/;

  const isTifinagh = (value) => {
    return REGEX.test(value);
  }; // end isTifinagh

  // export isTifinagh as commonjs module
  module.exports = isTifinagh;
})(); // end IIFE