'use strict';

(() => {
  const REGEX = /^[\u0965\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F]+$/;

  const isLimbu = (value) => {
    return REGEX.test(value);
  }; // end isLimbu

  // export isLimbu as commonjs module
  module.exports = isLimbu;
})(); // end IIFE