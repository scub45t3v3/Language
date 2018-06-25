REGEX = /^(?:\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9])+$/

isSoraSompeng = (value) ->
  return REGEX.test value

module.exports = isSoraSompeng