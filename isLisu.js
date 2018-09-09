'use strict';

(() => {
  const REGEX = /^[\uA4D0-\uA4FF]+$/;

  const isLisu = (value) => {
    return REGEX.test(value);
  }; // end isLisu

  // export isLisu as commonjs module
  module.exports = isLisu;
})(); // end IIFE