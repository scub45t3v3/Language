'use strict';

(() => {
  const REGEX = /^[\x00-\x7F]+$/; // eslint-disable-line no-control-regex

  const isAscii = (value) => {
    return REGEX.test(value);
  }; // end isAscii

  // export isAscii as commonjs module
  module.exports = isAscii;
})(); // end IIFE