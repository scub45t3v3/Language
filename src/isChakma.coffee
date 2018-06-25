REGEX = ///^(?:[\u09E6-\u09EF\u1040-\u1049]
|\uD804[\uDD00-\uDD34\uDD36-\uDD43])+$///

isChakma = (value) ->
  return REGEX.test value

module.exports = isChakma