REGEX = /^[\u07C0-\u07FA]+$/

isNko = (value) ->
  return REGEX.test value

module.exports = isNko