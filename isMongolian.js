'use strict';

(() => {
  const REGEX = /^(?:[\u1800-\u180E\u1810-\u1819\u1820-\u1877\u1880-\u18AA]|\uD805[\uDE60-\uDE6C])+$/;

  const isMongolian = (value) => {
    return REGEX.test(value);
  }; // end isMongolian

  // export isMongolian as commonjs module
  module.exports = isMongolian;
})(); // end IIFE