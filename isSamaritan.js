'use strict';

(() => {
  const REGEX = /^[\u0800-\u082D\u0830-\u083E]+$/;

  const isSamaritan = (value) => {
    return REGEX.test(value);
  }; // end isSamaritan

  // export isSamaritan as commonjs module
  module.exports = isSamaritan;
})(); // end IIFE