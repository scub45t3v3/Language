REGEX = /^[\uA880-\uA8C5\uA8CE-\uA8D9]+$/

isSaurashtra = (value) ->
  return REGEX.test value

module.exports = isSaurashtra