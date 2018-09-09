'use strict';

(() => {
  const REGEX = /^(?:\uD802[\uDF00-\uDF35\uDF39-\uDF3F])+$/;

  const isAvestan = (value) => {
    return REGEX.test(value);
  }; // end isAvestan

  // export isAvestan as commonjs module
  module.exports = isAvestan;
})(); // end IIFE