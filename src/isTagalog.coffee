REGEX = /^[\u1700-\u170C\u170E-\u1714\u1735\u1736]+$/

isTagalog = (value) ->
  return REGEX.test value

module.exports = isTagalog