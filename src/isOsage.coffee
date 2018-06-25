REGEX = /^(?:\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB])+$/

isOsage = (value) ->
  return REGEX.test value

module.exports = isOsage