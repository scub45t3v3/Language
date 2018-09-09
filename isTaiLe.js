'use strict';

(() => {
  const REGEX = /^[\u1040-\u1049\u1950-\u196D\u1970-\u1974]+$/;

  const isTaiLe = (value) => {
    return REGEX.test(value);
  }; // end isTaiLe

  // export isTaiLe as commonjs module
  module.exports = isTaiLe;
})(); // end IIFE