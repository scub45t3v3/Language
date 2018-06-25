REGEX = /^(?:\uD802[\uDD00-\uDD1B\uDD1F])+$/

isPhoenician = (value) ->
  return REGEX.test value

module.exports = isPhoenician