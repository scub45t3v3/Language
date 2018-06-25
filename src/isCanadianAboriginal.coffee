REGEX = /^[\u1400-\u167F\u18B0-\u18F5]+$/

isCanadianAboriginal = (value) ->
  return REGEX.test value

module.exports = isCanadianAboriginal