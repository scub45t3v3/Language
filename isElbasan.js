'use strict';

(() => {
  const REGEX = /^(?:\uD801[\uDD00-\uDD27])+$/;

  const isElbasan = (value) => {
    return REGEX.test(value);
  }; // end isElbasan

  // export isElbasan as commonjs module
  module.exports = isElbasan;
})(); // end IIFE