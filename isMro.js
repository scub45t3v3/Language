'use strict';

(() => {
  const REGEX = /^(?:\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F])+$/;

  const isMro = (value) => {
    return REGEX.test(value);
  }; // end isMro

  // export isMro as commonjs module
  module.exports = isMro;
})(); // end IIFE