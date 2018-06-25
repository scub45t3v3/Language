REGEX = /^[\u16A0-\u16EA\u16EE-\u16F8]+$/

isRunic = (value) ->
  return REGEX.test value

module.exports = isRunic