REGEX = /^(?:\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5])+$/

isOldPersian = (value) ->
  return REGEX.test value

module.exports = isOldPersian