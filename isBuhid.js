'use strict';

(() => {
  const REGEX = /^[\u1735\u1736\u1740-\u1753]+$/;

  const isBuhid = (value) => {
    return REGEX.test(value);
  }; // end isBuhid

  // export isBuhid as commonjs module
  module.exports = isBuhid;
})(); // end IIFE