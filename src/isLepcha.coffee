REGEX = /^[\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F]+$/

isLepcha = (value) ->
  return REGEX.test value

module.exports = isLepcha
