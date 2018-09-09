'use strict';

(() => {
  const REGEX = /^(?:\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB])+$/;

  const isOsage = (value) => {
    return REGEX.test(value);
  }; // end isOsage

  // export isOsage as commonjs module
  module.exports = isOsage;
})(); // end IIFE