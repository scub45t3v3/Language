REGEX = /^(?:\uD811[\uDC00-\uDE46])+$/

isAnatolianHieroglyphs = (value) ->
  return REGEX.test value

module.exports = isAnatolianHieroglyphs