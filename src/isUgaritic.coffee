REGEX = /^(?:\uD800[\uDF80-\uDF9D\uDF9F])+$/

isUgaritic = (value) ->
  return REGEX.test value

module.exports = isUgaritic