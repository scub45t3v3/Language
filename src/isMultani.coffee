REGEX = ///^(?:[\u0A66-\u0A6F]
|\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9])+$///

isMultani = (value) ->
  return REGEX.test value

module.exports = isMultani