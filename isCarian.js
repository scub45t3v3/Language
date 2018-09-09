'use strict';

(() => {
  const REGEX = /^(?:\uD800[\uDEA0-\uDED0])+$/;

  const isCarian = (value) => {
    return REGEX.test(value);
  }; // end isCarian

  // export isCarian as commonjs module
  module.exports = isCarian;
})(); // end IIFE