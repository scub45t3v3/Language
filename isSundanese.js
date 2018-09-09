'use strict';

(() => {
  const REGEX = /^[\u1B80-\u1BBF\u1CC0-\u1CC7]+$/;

  const isSundanese = (value) => {
    return REGEX.test(value);
  }; // end isSundanese

  // export isSundanese as commonjs module
  module.exports = isSundanese;
})(); // end IIFE