REGEX = /^[\u1735\u1736\u1760-\u176C\u176E-\u1770\u1772\u1773]+$/

isTagbanwa = (value) ->
  return REGEX.test value

module.exports = isTagbanwa