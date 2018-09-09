'use strict';

(() => {
  const REGEX = /^[\u1A00-\u1A1B\u1A1E\u1A1F\uA9CF]+$/;

  const isBuginese = (value) => {
    return REGEX.test(value);
  }; // end isBuginese

  // export isBuginese as commonjs module
  module.exports = isBuginese;
})(); // end IIFE