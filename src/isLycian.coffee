REGEX = /^(?:\uD800[\uDE80-\uDE9C])+$/

isLycian = (value) ->
  return REGEX.test value

module.exports = isLycian
