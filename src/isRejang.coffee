REGEX = /^[\uA930-\uA953\uA95F]+$/

isRejang = (value) ->
  return REGEX.test value

module.exports = isRejang