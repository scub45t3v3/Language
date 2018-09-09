'use strict';

(() => {
  const REGEX = /^[\u060C\u061B\u061F\u0660-\u0669\u0780-\u07B1\uFDF2\uFDFD]+$/;

  const isThaana = (value) => {
    return REGEX.test(value);
  }; // end isThaana

  // export isThaana as commonjs module
  module.exports = isThaana;
})(); // end IIFE