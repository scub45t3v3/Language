REGEX = /^[\uA4D0-\uA4FF]+$/

isLisu = (value) ->
  return REGEX.test value

module.exports = isLisu
