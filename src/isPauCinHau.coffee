REGEX = /^(?:\uD806[\uDEC0-\uDEF8])+$/

isPauCinHau = (value) ->
  return REGEX.test value

module.exports = isPauCinHau