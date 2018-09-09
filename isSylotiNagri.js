'use strict';

(() => {
  const REGEX = /^[\u0964\u0965\u09E6-\u09EF\uA800-\uA82B]+$/;

  const isSylotiNagri = (value) => {
    return REGEX.test(value);
  }; // end isSylotiNagri

  // export isSylotiNagri as commonjs module
  module.exports = isSylotiNagri;
})(); // end IIFE