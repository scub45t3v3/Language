REGEX = /^[\u0964\u0965\u09E6-\u09EF\uA800-\uA82B]+$/

isSylotiNagri = (value) ->
  return REGEX.test value

module.exports = isSylotiNagri