'use strict';

(() => {
  const REGEX = /^(?:[\uA830-\uA839]|\uD805[\uDE00-\uDE44\uDE50-\uDE59])+$/;

  const isModi = (value) => {
    return REGEX.test(value);
  }; // end isModi

  // export isModi as commonjs module
  module.exports = isModi;
})(); // end IIFE