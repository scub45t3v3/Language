REGEX = /^(?:\uD802[\uDD20-\uDD39\uDD3F])+$/

isLydian = (value) ->
  return REGEX.test value

module.exports = isLydian