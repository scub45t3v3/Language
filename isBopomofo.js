'use strict';

(() => {
  const REGEX = /^[\u02EA\u02EB\u3001-\u3003\u3008-\u3011\u3013-\u301F\u302A-\u302D\u3030\u3037\u30FB\u3105-\u312D\u31A0-\u31BA\uFE45\uFE46\uFF61-\uFF65]+$/;

  const isBopomofo = (value) => {
    return REGEX.test(value);
  }; // end isBopomofo

  // export isBopomofo as commonjs module
  module.exports = isBopomofo;
})(); // end IIFE