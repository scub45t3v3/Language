'use strict';

(() => {
  const REGEX = /^(?:\uD806[\uDEC0-\uDEF8])+$/;

  const isPauCinHau = (value) => {
    return REGEX.test(value);
  }; // end isPauCinHau

  // export isPauCinHau as commonjs module
  module.exports = isPauCinHau;
})(); // end IIFE