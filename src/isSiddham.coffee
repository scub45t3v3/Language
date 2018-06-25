REGEX = /^(?:\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD])+$/

isSiddham = (value) ->
  return REGEX.test value

module.exports = isSiddham