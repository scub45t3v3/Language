REGEX = /^(?:\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6])+$/

isMarchen = (value) ->
  return REGEX.test value

module.exports = isMarchen