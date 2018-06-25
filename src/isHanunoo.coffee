REGEX = /^[\u1720-\u1736]+$/

isHanunoo = (value) ->
  return REGEX.test value

module.exports = isHanunoo