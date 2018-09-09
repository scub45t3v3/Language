'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDD20-\uDD39\uDD3F])+$/;

  const isOlChiki = (value) => {
    return REGEX.test(value);
  }; // end isOlChiki

  // export isOlChiki as commonjs module
  module.exports = isOlChiki;
})(); // end IIFE