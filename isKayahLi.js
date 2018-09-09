'use strict';

(() => {
  const REGEX = /^[\uA900-\uA92F]+$/;

  const isKayahLi = (value) => {
    return REGEX.test(value);
  }; // end isKayahLi

  // export isKayahLi as commonjs module
  module.exports = isKayahLi;
})(); // end IIFE