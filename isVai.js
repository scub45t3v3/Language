'use strict';

(() => {
  const REGEX = /^[\uA500-\uA62B]+$/;

  const isVai = (value) => {
    return REGEX.test(value);
  }; // end isVai

  // export isVai as commonjs module
  module.exports = isVai;
})(); // end IIFE