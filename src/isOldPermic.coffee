REGEX = /^(?:\u0483|\uD800[\uDF50-\uDF7A])+$/

isOldPermic = (value) ->
  return REGEX.test value

module.exports = isOldPermic