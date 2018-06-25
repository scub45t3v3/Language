REGEX = /^(?:\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9])+$/

isOsmanya = (value) ->
  return REGEX.test value

module.exports = isOsmanya