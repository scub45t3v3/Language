'use strict';

(() => {
  const REGEX = /^[A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u0363-\u036F\u0485\u0486\u0951\u0952\u10FB\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u20F0\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA7FF\uA92E\uAB30-\uAB5A\uAB5C-\uAB64\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A]+$/;

  const isLatin = (value) => {
    return REGEX.test(value);
  }; // end isLatin

  // export isLatin as commonjs module
  module.exports = isLatin;
})(); // end IIFE