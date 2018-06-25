REGEX = /^(?:\uD802[\uDC60-\uDC7F])+$/

isPalmyrene = (value) ->
  return REGEX.test value

module.exports = isPalmyrene