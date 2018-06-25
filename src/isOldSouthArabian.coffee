REGEX = /^(?:\uD802[\uDE60-\uDE7F])+$/

isOldSouthArabian = (value) ->
  return REGEX.test value

module.exports = isOldSouthArabian