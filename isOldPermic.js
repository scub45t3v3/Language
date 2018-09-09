'use strict';

(() => {
  const REGEX = /^(?:\u0483|\uD800[\uDF50-\uDF7A])+$/;

  const isOldPermic = (value) => {
    return REGEX.test(value);
  }; // end isOldPermic

  // export isOldPermic as commonjs module
  module.exports = isOldPermic;
})(); // end IIFE