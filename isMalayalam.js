'use strict';

(() => {
  const REGEX = /^[\u0951\u0952\u0964\u0965\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F\u1CDA]+$/;

  const isMalayalam = (value) => {
    return REGEX.test(value);
  }; // end isMalayalam

  // export isMalayalam as commonjs module
  module.exports = isMalayalam;
})(); // end IIFE