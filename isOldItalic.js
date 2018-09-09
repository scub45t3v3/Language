'use strict';

(() => {
  const REGEX = /^(?:\uD800[\uDF00-\uDF23])+$/;

  const isOldItalic = (value) => {
    return REGEX.test(value);
  }; // end isOldItalic

  // export isOldItalic as commonjs module
  module.exports = isOldItalic;
})(); // end IIFE