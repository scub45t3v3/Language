REGEX = ///^(?:\uD81B\uDFE0|[\uD81C-\uD820][\uDC00-\uDFFF]
|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2])+$///

isTangut = (value) ->
  return REGEX.test value

module.exports = isTangut