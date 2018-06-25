REGEX = /^[\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9]+$/

isMeeteiMayek = (value) ->
  return REGEX.test value

module.exports = isMeeteiMayek