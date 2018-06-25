REGEX = /^[\u1000-\u109F\uA92E\uA9E0-\uA9FE\uAA60-\uAA7F]+$/

isMyanmar = (value) ->
  return REGEX.test value

module.exports = isMyanmar