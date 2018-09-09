'use strict';

(() => {
  const REGEX = /^[\u16A0-\u16EA\u16EE-\u16F8]+$/;

  const isRunic = (value) => {
    return REGEX.test(value);
  }; // end isRunic

  // export isRunic as commonjs module
  module.exports = isRunic;
})(); // end IIFE