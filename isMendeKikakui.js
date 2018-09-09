'use strict';

(() => {
  const REGEX = /^(?:\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6])+$/;

  const isMendeKikakui = (value) => {
    return REGEX.test(value);
  }; // end isMendeKikakui

  // export isMendeKikakui as commonjs module
  module.exports = isMendeKikakui;
})(); // end IIFE