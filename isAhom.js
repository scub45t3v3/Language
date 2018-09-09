'use strict';

(() => {
  const REGEX = /^(?:\uD805[\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF3F])+$/;

  const isAhom = (value) => {
    return REGEX.test(value);
  }; // end isAhom

  // export isAhom as commonjs module
  module.exports = isAhom;
})(); // end IIFE