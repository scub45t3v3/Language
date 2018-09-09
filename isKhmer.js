'use strict';

(() => {
  const REGEX = /^[\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF]+$/;

  const isKhmer = (value) => {
    return REGEX.test(value);
  }; // end isKhmer

  // export isKhmer as commonjs module
  module.exports = isKhmer;
})(); // end IIFE