'use strict';


(() => {
  const REGEX = /^(?:\u0640|\uD83A[\uDD00-\uDD4A\uDD50-\uDD59\uDD5E\uDD5F])+$/;

  const isAdlam = (value) => {
    return REGEX.test(value);
  }; // end isAdlam

  // export isAdlam as commonjs module
  module.exports = isAdlam;
})(); // end IIFE