REGEX = /^(?:\uD803[\uDC00-\uDC48])+$/

isOldTurkic = (value) ->
  return REGEX.test value

module.exports = isOldTurkic