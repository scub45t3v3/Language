REGEX = /^(?:[\u0964\u0965\uA830-\uA839]|\uD805[\uDE80-\uDEB7\uDEC0-\uDEC9])+$/

isTakri = (value) ->
  return REGEX.test value

module.exports = isTakri