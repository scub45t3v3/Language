'use strict';

(() => {
  const REGEX = /^[\u1700-\u170C\u170E-\u1714\u1735\u1736]+$/;

  const isTagalog = (value) => {
    return REGEX.test(value);
  }; // end isTagalog

  // export isTagalog as commonjs module
  module.exports = isTagalog;
})(); // end IIFE