REGEX = /^(?:\uD800[\uDF00-\uDF23])+$/

isOldItalic = (value) ->
  return REGEX.test value

module.exports = isOldItalic