REGEX = /^(?:\uD805[\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF3F])+$/

isAhom = (value) ->
  return REGEX.test value

module.exports = isAhom