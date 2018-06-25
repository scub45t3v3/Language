REGEX = /^(?:[\u0AE6-\u0AEF]|\uD804[\uDE00-\uDE11\uDE13-\uDE3E])+$/

isKhojki = (value) ->
  return REGEX.test value

module.exports = isKhojki
