REGEX =  /^[\x00-\x7F]+$/

isAscii = (value) ->
  return REGEX.test value

module.exports = isAscii