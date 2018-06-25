REGEX = ///^(?:[\u0484\u0487\u2C00-\u2C2E\u2C30-\u2C5E\u2E43\uA66F]
|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A])+$///

isGlagolitic = (value) ->
  return REGEX.test value

module.exports = isGlagolitic