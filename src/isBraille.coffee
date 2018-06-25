REGEX = /^[\u2800-\u28FF]+$/

isBraille = (value) ->
  return REGEX.test value

module.exports = isBraille