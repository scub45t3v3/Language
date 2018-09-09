'use strict';

(() => {
  const REGEX = /^[\u1802\u1803\u1805\uA840-\uA877]+$/;

  const isPhagsPa = (value) => {
    return REGEX.test(value);
  }; // end isPhagsPa

  // export isPhagsPa as commonjs module
  module.exports = isPhagsPa;
})(); // end IIFE