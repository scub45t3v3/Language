REGEX = /^[\u1BC0-\u1BF3\u1BFC-\u1BFF]+$/

isBatak = (value) ->
  return REGEX.test value

module.exports = isBatak