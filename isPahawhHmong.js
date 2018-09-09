'use strict';

(() => {
  const REGEX = /^(?:\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F])+$/;

  const isPahawhHmong = (value) => {
    return REGEX.test(value);
  }; // end isPahawhHmong

  // export isPahawhHmong as commonjs module
  module.exports = isPahawhHmong;
})(); // end IIFE