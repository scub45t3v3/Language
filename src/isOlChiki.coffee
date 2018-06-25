REGEX = /^(?:\uD802[\uDD20-\uDD39\uDD3F])+$/

isOlChiki = (value) ->
  return REGEX.test value

module.exports = isOlChiki