REGEX = /^[\u1680-\u169C]+$/

isOgham = (value) ->
  return REGEX.test value

module.exports = isOgham