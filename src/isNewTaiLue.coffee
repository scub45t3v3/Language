REGEX = /^[\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF]+$/

isNewTaiLue = (value) ->
  return REGEX.test value

module.exports = isNewTaiLue