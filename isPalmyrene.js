'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDC60-\uDC7F])+$/;

  const isPalmyrene = (value) => {
    return REGEX.test(value);
  }; // end isPalmyrene

  // export isPalmyrene as commonjs module
  module.exports = isPalmyrene;
})(); // end IIFE