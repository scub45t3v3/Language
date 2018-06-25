REGEX = /^(?:\uD801[\uDC00-\uDC4F])+$/

isDeseret = (value) ->
  return REGEX.test value

module.exports = isDeseret