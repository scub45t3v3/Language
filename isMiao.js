'use strict';

(() => {
  const REGEX = /^(?:\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F])+$/;

  const isMiao = (value) => {
    return REGEX.test(value);
  }; // end isMiao

  // export isMiao as commonjs module
  module.exports = isMiao;
})(); // end IIFE