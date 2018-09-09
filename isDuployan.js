'use strict';

(() => {
  const REGEX = /^(?:\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDCA3])+$/;

  const isDuployan = (value) => {
    return REGEX.test(value);
  }; // end isDuployan

  // export isDuployan as commonjs module
  module.exports = isDuployan;
})(); // end IIFE