'use strict';

(() => {
  const REGEX = /^[\u07C0-\u07FA]+$/;

  const isNko = (value) => {
    return REGEX.test(value);
  }; // end isNko

  // export isNko as commonjs module
  module.exports = isNko;
})(); // end IIFE