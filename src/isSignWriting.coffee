REGEX = /^(?:\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF])+$/

isSignWriting = (value) ->
  return REGEX.test value

module.exports = isSignWriting