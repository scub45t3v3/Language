'use strict';

(() => {
  const REGEX = /^(?:\uD800[\uDE80-\uDE9C])+$/;

  const isLycian = (value) => {
    return REGEX.test(value);
  }; // end isLycian

  // export isLycian as commonjs module
  module.exports = isLycian;
})(); // end IIFE