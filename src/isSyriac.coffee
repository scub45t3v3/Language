REGEX = ///^[\u060C\u061B\u061F\u0640\u064B-\u0655\u0670\u0700-\u070D
\u070F-\u074A\u074D-\u074F]+$///

isSyriac = (value) ->
  return REGEX.test value

module.exports = isSyriac