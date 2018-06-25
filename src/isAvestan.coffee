REGEX = /^(?:\uD802[\uDF00-\uDF35\uDF39-\uDF3F])+$/

isAvestan = (value) ->
  return REGEX.test value

module.exports = isAvestan