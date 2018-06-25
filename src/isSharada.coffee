REGEX = ///^(?:[\u0951\u1CD7\u1CD9\u1CDC\u1CDD\u1CE0]
|\uD804[\uDD80-\uDDCD\uDDD0-\uDDDF])+$///

isSharada = (value) ->
  return REGEX.test value

module.exports = isSharada