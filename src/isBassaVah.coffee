REGEX = /^(?:\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5])+$/

isBassaVah = (value) ->
  return REGEX.test value

module.exports = isBassaVah