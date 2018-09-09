'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDC40-\uDC55\uDC57-\uDC5F])+$/;

  const isImperialAramaic = (value) => {
    return REGEX.test(value);
  }; // end isImperialAramaic

  // export isImperialAramaic as commonjs module
  module.exports = isImperialAramaic;
})(); // end IIFE