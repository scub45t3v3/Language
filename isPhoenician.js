'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDD00-\uDD1B\uDD1F])+$/;

  const isPhoenician = (value) => {
    return REGEX.test(value);
  }; // end isPhoenician

  // export isPhoenician as commonjs module
  module.exports = isPhoenician;
})(); // end IIFE