'use strict';

(() => {
  const REGEX = /^(?:\uD800[\uDF30-\uDF4A])+$/;

  const isGothic = (value) => {
    return REGEX.test(value);
  }; // end isGothic

  // export isGothic as commonjs module
  module.exports = isGothic;
})(); // end IIFE