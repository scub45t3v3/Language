REGEX = /^(?:\uD800[\uDF30-\uDF4A])+$/

isGothic = (value) ->
  return REGEX.test value

module.exports = isGothic