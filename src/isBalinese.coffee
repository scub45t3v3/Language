REGEX = /^[\u1B00-\u1B4B\u1B50-\u1B7C]+$/

isBalinese = (value) ->
  return REGEX.test value

module.exports = isBalinese