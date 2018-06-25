REGEX = /^(?:\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E])+$/

isEgyptianHieroglyphs = (value) ->
  return REGEX.test value

module.exports = isEgyptianHieroglyphs