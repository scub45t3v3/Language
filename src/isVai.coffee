REGEX = /^[\uA500-\uA62B]+$/

isVai = (value) ->
  return REGEX.test value

module.exports = isVai