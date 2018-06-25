REGEX = ///^(?:\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C
\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDCA3])+$///

isDuployan = (value) ->
  return REGEX.test value

module.exports = isDuployan