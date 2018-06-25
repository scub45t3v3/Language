REGEX = /^(?:\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C])+$/

isBhaiksuki = (value) ->
  return REGEX.test value

module.exports = isBhaiksuki