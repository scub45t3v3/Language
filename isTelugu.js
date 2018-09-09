'use strict';

(() => {
  const REGEX = /^[\u0951\u0952\u0964\u0965\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C78-\u0C7F\u1CDA]+$/;

  const isTelugu = (value) => {
    return REGEX.test(value);
  }; // end isTelugu

  // export isTelugu as commonjs module
  module.exports = isTelugu;
})(); // end IIFE