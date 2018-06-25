REGEX = /^(?:\uD802[\uDC40-\uDC55\uDC57-\uDC5F])+$/

isImperialAramaic = (value) ->
  return REGEX.test value

module.exports = isImperialAramaic
