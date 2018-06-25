REGEX = /^(?:\uD802[\uDE80-\uDE9F])+$/

isOldNorthArabian = (value) ->
  return REGEX.test value

module.exports = isOldNorthArabian