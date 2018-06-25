REGEX = /^(?:\uD801[\uDC50-\uDC7F])+$/

isShavian = (value) ->
  return REGEX.test value

module.exports = isShavian