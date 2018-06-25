REGEX = /^(?:\u0640|\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF])+$/

isPsalterPahlavi = (value) ->
  return REGEX.test value

module.exports = isPsalterPahlavi