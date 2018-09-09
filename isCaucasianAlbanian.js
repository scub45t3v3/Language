'use strict';

(() => {
  const REGEX = /^(?:\uD801[\uDD30-\uDD63\uDD6F])+$/;

  const isCaucasianAlbanian = (value) => {
    return REGEX.test(value);
  }; // end isCaucasianAlbanian

  // export isCaucasianAlbanian as commonjs module
  module.exports = isCaucasianAlbanian;
})(); // end IIFE