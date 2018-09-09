'use strict';

(() => {
  const REGEX = /^(?:\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5])+$/;

  const isBassaVah = (value) => {
    return REGEX.test(value);
  }; // end isBassaVah

  // export isBassaVah as commonjs module
  module.exports = isBassaVah;
})(); // end IIFE