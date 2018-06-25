REGEX = /^(?:\uD804[\uDC00-\uDC4D\uDC52-\uDC6F\uDC7F])+$/

isBrahmi = (value) ->
  return REGEX.test value

module.exports = isBrahmi