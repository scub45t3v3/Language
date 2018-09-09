'use strict';

(() => {
  const REGEX = /^(?:\uD800[\uDF80-\uDF9D\uDF9F])+$/;

  const isUgaritic = (value) => {
    return REGEX.test(value);
  }; // end isUgaritic

  // export isUgaritic as commonjs module
  module.exports = isUgaritic;
})(); // end IIFE