'use strict';

(() => {
  const REGEX = /^(?:[\u0964\u0965\uA830-\uA839]|\uD805[\uDE80-\uDEB7\uDEC0-\uDEC9])+$/;

  const isTakri = (value) => {
    return REGEX.test(value);
  }; // end isTakri

  // export isTakri as commonjs module
  module.exports = isTakri;
})(); // end IIFE