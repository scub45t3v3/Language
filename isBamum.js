'use strict';

(() => {
  const REGEX = /^(?:[\uA6A0-\uA6F7]|\uD81A[\uDC00-\uDE38])+$/;

  const isBamum = (value) => {
    return REGEX.test(value);
  }; // end isBamum

  // export isBamum as commonjs module
  module.exports = isBamum;
})(); // end IIFE