REGEX = /^(?:\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF])+$/

isNabataean = (value) ->
  return REGEX.test value

module.exports = isNabataean