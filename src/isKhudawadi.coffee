REGEX = /^(?:[\u0964\u0965\uA830-\uA839]|\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9])+$/

isKhudawadi = (value) ->
  return REGEX.test value

module.exports = isKhudawadi
