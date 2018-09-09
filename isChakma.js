'use strict';

(() => {
  const REGEX = /^(?:[\u09E6-\u09EF\u1040-\u1049]|\uD804[\uDD00-\uDD34\uDD36-\uDD43])+$/;

  const isChakma = (value) => {
    return REGEX.test(value);
  }; // end isChakma

  // export isChakma as commonjs module
  module.exports = isChakma;
})(); // end IIFE