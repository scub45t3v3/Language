'use strict';

(() => {
  const REGEX = /^[\u0951\u0952\u0964\u0965\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FB\uA8F1]+$/;

  const isBengali = (value) => {
    return REGEX.test(value);
  }; // end isBengali

  // export isBengali as commonjs module
  module.exports = isBengali;
})(); // end IIFE