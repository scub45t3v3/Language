'use strict';

(() => {
  const REGEX = /^(?:\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F])+$/;

  const isCypriot = (value) => {
    return REGEX.test(value);
  }; // end isCypriot

  // export isCypriot as commonjs module
  module.exports = isCypriot;
})(); // end IIFE