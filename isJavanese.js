'use strict';

(() => {
  const REGEX = /^[\uA980-\uA9CD\uA9CF-\uA9D9\uA9DE\uA9DF]+$/;

  const isJavanese = (value) => {
    return REGEX.test(value);
  }; // end isJavanese

  // export isJavanese as commonjs module
  module.exports = isJavanese;
})(); // end IIFE