'use strict';

(() => {
  const REGEX = /^(?:\u0640|\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6])+$/;

  const isManichaean = (value) => {
    return REGEX.test(value);
  }; // end isManichaean

  // export isManichaean as commonjs module
  module.exports = isManichaean;
})(); // end IIFE