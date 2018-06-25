REGEX = /^(?:\uD802[\uDD80-\uDD9F])+$/

isMeroiticHieroglyphs = (value) ->
  return REGEX.test value

module.exports = isMeroiticHieroglyphs