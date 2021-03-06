'use strict';

(() => {
  const REGEX = /^(?:[\u0A66-\u0A6F]|\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9])+$/;

  const isMultani = (value) => {
    return REGEX.test(value);
  }; // end isMultani

  // export isMultani as commonjs module
  module.exports = isMultani;
})(); // end IIFE