REGEX = /^(?:\uD801[\uDD00-\uDD27])+$/

isElbasan = (value) ->
  return REGEX.test value

module.exports = isElbasan