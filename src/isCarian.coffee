REGEX = /^(?:\uD800[\uDEA0-\uDED0])+$/

isCarian = (value) ->
  return REGEX.test value

module.exports = isCarian