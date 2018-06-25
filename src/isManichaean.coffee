REGEX = /^(?:\u0640|\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6])+$/

isManichaean = (value) ->
  return REGEX.test value

module.exports = isManichaean